const {expect, test} = require('@oclif/test')
const cmd = require('..')

const expected = `{
    "integer": 42,
    "integer_array": [
        42,
        41,
        40
    ],
    "float": 42.24,
    "float_array": [
        42.24,
        41.14,
        40.04
    ],
    "bool": true,
    "bool-not": false,
    "bool_array": [
        true,
        false
    ],
    "other-page": "overwrited string",
    "child": {
        "child-value": "string",
        "child": {
            "child-child-value": 42,
            "child-child-other": "value"
        },
        "child_array": [
            {
                "child-child-array-zero": "I'm first child",
                "child-child-array-merge": "I'm first child merge"
            },
            {
                "child-child-array-one": "I'm second child overwrited"
            }
        ]
    }
}`

describe('stylops', () => {
  test
  .stdout()
  .do(() => cmd.run(['-i', './test/fixture.css']))
  .it('run convert -i ./fixture.css -o ./fixture.json', ctx => {
    expect(ctx.stdout).to.contain(expected)
  })
})
