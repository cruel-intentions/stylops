#!/bin/sh

cat package.css | ../bin/run -o package.json
cat fixture.css | ../bin/run -o fixture.json
