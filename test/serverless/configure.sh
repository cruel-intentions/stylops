#!/bin/sh

cat package.css |../../bin/run -o package.json
npm install
cat serverless.css |../../bin/run|./node_modules/.bin/json2yaml > serverless.yaml
