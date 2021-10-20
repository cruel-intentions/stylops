stylops
=======

Write JSON as CSS

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/stylops.svg)](https://npmjs.org/package/stylops)
[![Downloads/week](https://img.shields.io/npm/dw/stylops.svg)](https://npmjs.org/package/stylops)
[![License](https://img.shields.io/npm/l/stylops.svg)](https://github.com/hugosenari/stylops/blob/master/package.json)

<!-- toc -->
* [Why](#why)
* [TODO](#todo)
* [Usage](#usage)
* [Related](#related)
<!-- tocstop -->
# Why

**MORE PAIN! NO GAIN!**

Instead of make your work of write JSON (maybe YAML) configuration file better
this will make it worse.

We really hope you didn't try to cheat using any pre-processor
like [stylus](https://stylus-lang.com/#features), [sass](https://sass-lang.com/),
[less](http://lesscss.org/), because if you do, your verbose CSS will gain
features like *variables*, *includes*, *mixins* and etc, please don't do that.

Unintended side-effect, every selector merges objects deeply, this means that
if you write your selector two times your object will:

1. Merge properties
2. Overwrite if exists

Fortunately, unlike any pre-processor or browser, `include` isn't supported, otherwise you
could use it to make any included file change any property of final
json, like happens when mutiple css files have same selector, [example](./shot-2021-01-09_20-54-34.jpg?raw=true).

Please look at [tests](./test/fixture.css) and [anti-patterns](./anti-patterns)
to known what you should and shouldn't do.

# TODO

* Make array harder to write
* Find a way to set keys with spaces ie: `{ "stylops analis": "Stylopidae"}`
* Support other CSS features (more selectors, import, variables, media-query)


# Usage
<!-- usage -->
```sh-session
$ npm install -g stylops
$ stylops (-v|--version|version)
stylops/0.0.1 linux-x64 node-v15.2.1
$ stylops --help 
USAGE
$ stylops -i test/fixture.css -o fixture.json
...
```
<!-- usagestop -->

# Constraints

1. Your root object is @page, ie:
```css
/*
 {
  "root-property": "root property value"
 }
*/

@page {
  root-property: "root property value";
}
```

2. Atributes should be valid json value (null, true, 3, "avocado")
```css
/*
 {
    "root-property": 3.14
 }
*/

@page {
  root-property: 3.14;
}
```

3. Your object property name is a tag selector, ie:
```css
/*
 {
    "sub-obj": {
      "property": "value"
    }
 }
*/

sub-obj {
  property: "value";
}
```

4. Array should be writed with :nth-child(index)
```css
/*
 {
    "sub-obj": [
      {
        "property": "value"
      }
    ]
 }
*/

sub-obj :nth-child(0) {
  property: "value"
}
```

4.1 Simple Array (unstable)

```css

/*
 {
    "sub-prop": [
      1,
      2.2,
      "string",
      false,
      null
    ]
 }
*/

@page {
  sub-prop: array(
    1,
    2.2,
    "string",
    false,
    null
  );
}
```

# Related:

## Posts
* [Awsome json](https://github.com/burningtree/awesome-json#transformations)
* [Awsome yaml](https://github.com/dreftymac/awesome-yaml#templating)
* [Configs Suck](https://beepb00p.xyz/configs-suck.html)
* [Configuration complexity curse](https://blog.cedriccharly.com/post/20191109-the-configuration-complexity-curse/)
* [Configuration complexity clock](http://mikehadlow.blogspot.com/2012/05/configuration-complexity-clock.html)
* [Configuration files suck](https://hackernoon.com/configuration-files-suck-6daa9812f601)
* [Conflang 2021](https://2021.splashcon.org/home/conflang-2021#About)
* [Design Criteria for Programming Languages](http://jcsites.juniata.edu/faculty/rhodes/lt/plcriteria.htm)
* [INTERCAL, YAML, And Other Horrible Programming Languages](https://www.reddit.com/r/programming/comments/ls6tgm/intercal_yaml_and_other_horrible_programming/)
* [Language Evaluation Criteria](https://progr-harrykar.blogspot.com/2018/11/language-evaluation-criteria.html)
* [Noyaml](https://noyaml.com/)
* [Painless YAML Templating](http://www.swisspush.org/tools/2020/01/29/painless-yaml-templating)
* [State of config file formats](https://octopus.com/blog/state-of-config-file-formats)
* [Structured text tools](https://github.com/dbohdan/structured-text-tools)
* [Use placeholders in yaml](https://stackoverflow.com/questions/41620674/use-placeholders-in-yaml)

## Projects
* [Archieml](http://archieml.org)
* [Cfg](https://docs.red-dove.com/cfg/index.html)
* [Coil](https://code.google.com/archive/p/coil/)
* [Cue](https://cuelang.org/)
* [Echelons](https://github.com/freshtonic/echelons)
* [Eno](https://eno-lang.org/)
* [Dhall](https://dhall-lang.org/)
* [Freemarker-template-for-json](https://github.com/dphean/freemarker-template-for-json)
* [Frep](https://github.com/subchen/frep)
* [Grfon](https://app.assembla.com/spaces/grfon/subversion/source)
* [Hcl](https://github.com/hashicorp/hcl)
* [Hjson](https://hjson.github.io/)
* [Hocon](https://github.com/lightbend/config/blob/master/HOCON.md)
* [Icinga dsl](https://icinga.com/docs/icinga-2/latest/doc/04-configuration/#hosts-conf)
* [Jinsi](https://github.com/scravy/jinsi)
* [Jjay](https://github.com/frxstrem/jjay)
* [Jo](https://github.com/jpmens/jo)
* [Json2json](https://github.com/joelvh/json2json)
* [Json2json](https://github.com/waqqas/json2json)
* [Json template literals](https://github.com/akkireddyrajesh/json-template-literals)
* [Json-template-engine](https://github.com/vmware/json-template-engine)
* [Json templating](https://github.com/squeaky-godzilla/json-templating)
* [Json-creator](https://github.com/forsleeping/json-creator)
* [Json-pn](https://github.com/DmShpak/json-pn)
* [Jsonapter](https://github.com/amida-tech/jsonapter)
* [Jt](https://github.com/orirawlings/jt)
* [Jt](https://github.com/neochrome/jt)
* [Jtc](https://github.com/ldn-softdev/jtc)
* [Jtool](https://github.com/dackon/jtool)
* [Json-e](https://json-e.js.org/)
* [Jsonnet](https://jsonnet.org/)
* [Kale](https://github.com/jaylach/kale)
* [Kanabo](https://github.com/kevinbirch/kanabo)
* [KDL](https://kdl.dev/)
* [KSON](https://gitlab.com/jacob.brazeal/ksonpy)
* [Merge-yaml](https://github.com/EdisonLabs/merge-yaml)
* [Meson](https://mesonbuild.com/Syntax.html)
* [MSON](https://apiblueprint.org/documentation/mson/specification.html)
* [Nickel](https://github.com/tweag/nickel)
* [Nix](https://nixos.wiki/wiki/Nix_Expression_Language)
* [Onion](https://github.com/UnquietCode/onion)
* [Rabl](https://github.com/nesquena/rabl)
* [Refmt](https://github.com/rjeczalik/refmt)
* [Refs](https://github.com/doublenot/refs)
* [Rego](https://www.openpolicyagent.org/docs/latest/policy-language/)
* [Rjsone](https://github.com/wryun/rjsone)
* [Samovar](https://github.com/timdp/samovar)
* [Skylark](https://docs.bazel.build/versions/master/skylark/language.html#differences-with-python)
* [Spiff](https://github.com/mandelsoft/spiff)
* [St](https://selecttransform.github.io/site/)
* [Toml](https://toml.io/en/)
* [Template](https://github.com/koki/templates)
* [Templateur](https://github.com/cbguder/templateur)
* [Tmpl](https://github.com/haya14busa/tmpl)
* [Virgo](https://github.com/r2d4/virgo)
* [Watson](https://github.com/genkami/watson)
* [Yaml-merge](https://github.com/otrosien/yaml-merge)
* [Yamlenv](https://github.com/lbolla/yamlenv)
* [YamlInc](https://github.com/javanile/yamlinc)
* [Yamlp](https://bitbucket.org/djarvis/yamlp)
* [Yamlpal](https://github.com/otrosien/yaml-merge)
* [Yamlpath](https://github.com/wwkimball/yamlpath)
* [Yang](https://en.wikipedia.org/wiki/YANG)
* [yconf](https://github.com/kampka/yconf)
* [Yglu](https://github.com/lbovet/yglu)
* [Ytt](https://carvel.dev/ytt/)
