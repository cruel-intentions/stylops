#!/bin/sh

npx stylus package.styl --print | ../../../bin/run -o package.json
npx stylus serverless.styl --print | ../../../bin/run | npx json2yaml > serverless.yaml
