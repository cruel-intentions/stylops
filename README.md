stylops
=======

Write JSON as CSS

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/stylops.svg)](https://npmjs.org/package/stylops)
[![Downloads/week](https://img.shields.io/npm/dw/stylops.svg)](https://npmjs.org/package/stylops)
[![License](https://img.shields.io/npm/l/stylops.svg)](https://github.com/hugosenari/stylops/blob/master/package.json)

<!-- toc -->
* [Why](#about)
* [TODO](#todo)
* [Usage](#usage)
<!-- tocstop -->
# Why

**MORE PAIN! NO GAIN!**

Instead of make your work of write JSON (maybe YAML) configuration file better
this will make it worse.

We really hope you didn't try to cheat using any prep-processor
like [stylus](https://stylus-lang.com/#features), [sass](https://sass-lang.com/),
[less](http://lesscss.org/), because if you do, your verbose CSS will gain
features like *variables*, *includes*, *mixins* and etc, please don't do that.

Unintended side-effect, every selector merges objects deeply, this means that
if you write your selector two times your object will:

1. Merge properties
2. Overwrite if exists

Fortunately, unlike any pre-processor, `include` isn't supported, otherwise you
could use it to make any included file change any property of final
json, like happens when mutiple css files have same selector, [example](./shot-2021-01-09_20-54-34.jpg?raw=true).

Please look at [tests](./test/fixture.css) and [anti-patterns](./anti-patterns)
to known what you should and shouldn't do.

# TODO

* Make array harder to write


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
