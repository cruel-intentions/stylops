#!/bin/sh

npx stylus package.styl --print|../../bin/run -o package.json
npm install
