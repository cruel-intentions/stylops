const parse = require('css-parse')
const {
  head, map, mergeAll, mergeDeepWith, is,
  pathEq, pathOr, pipe, filter, prop, reject,
} = require('ramda')

const rules = ['stylesheet', 'rules']
const getRules = pathOr([], rules)
const typeIsPage = pathEq(['type'], 'page')
const filterPages = filter(typeIsPage)
const selectorIsRoot = pathEq(['selectors'], [])
const filterIsRoot = filter(selectorIsRoot)
const filterIsntRoot = reject(selectorIsRoot)
const attrValue = prop('value')
const attrName = prop('property')
const parsedValue = pipe(attrValue, JSON.parse)
const property = decl => ({[attrName(decl)]: parsedValue(decl)})
const declarations = pipe(prop('declarations'), map(property), mergeAll)
const root = pipe(filterPages, filterIsRoot, map(declarations), mergeAll)
const stringify = r => JSON.stringify(r, null, 4)
const result = pipe(mergeAll, stringify)

const parts2obj = (parts, value) => {
  const [first, ...rest] = parts
  if (!first) return value
  return {[first]: parts2obj(rest, value)}
}

const selector2obj = value => selector => parts2obj(
  selector.split(' '), value
)

const rule2objs = rule => {
  const value = declarations(rule)
  return rule.selectors.map(selector2obj(value))
}

const nth2Array = obj => {
  if (Array.isArray(obj)) return obj.map(nth2Array)
  if (!is(Object, obj)) return obj
  const keys =  Object.keys(obj)
  const lastKey = keys.pop()
  const items = Object.entries(obj)
  if (!lastKey.match(/^:nth-child\(\d+\)$/)) {
    return items.reduce((current, [key, value]) => ({
      ...current,
      [key]: nth2Array(value),
    }), [])
  }

  const none = Symbol('None')
  let result = keys.map(() => none)
  items.forEach(([key, value]) => {
    const index = key.replace(/^:nth-child\((\d+)\)$/, '$1')
    if (index && index !== key) {
      result[parseInt(index, 10)] = nth2Array(value)
    }
  })
  return reject(v => v === none, result)
}

const deepMerger = (left, right) => {
  if (Array.isArray(left) && Array.isArray(right))
    return [...left, ...right]
  if (is(Object, left) && is(Object, right))
    return mergeDeepWith(deepMerger, left, right)
  return right
}

const mergeDeep = arr => arr.reduce(deepMerger, {})

const childs = pipe(
  filterIsntRoot, map(pipe(rule2objs, head)), mergeDeep, nth2Array
)

const css2json = css => {
  const rules = getRules(parse(css))
  return result([root(rules), childs(rules)])
}

module.exports = css2json
