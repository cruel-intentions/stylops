#!/bin/sh

npx sass package.sass | ../../../bin/run -o package.json
npx sass docker-compose.sass |../../../bin/run | npx json2yaml > docker-compose.yaml
