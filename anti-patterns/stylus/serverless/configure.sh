#!/bin/sh

npx stylus package.styl --print|../../../bin/run -o package.json
../node_modules/.bin/stylus serverless.styl --print|../../../bin/run|../node_modules/.bin/json2yaml >serverless.yaml
npm install
