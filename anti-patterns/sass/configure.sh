#!/bin/sh

npx sass package.sass | ../../bin/run -o package.json
npm install
