#!/bin/sh



npx stylus package.styl --print > ../../test/package.css

npx stylus ./serverless/package.styl --print > ../../test/serverless/package.css
npx stylus ./serverless/serverless.styl --print > ../../test/serverless/serverless.css
sed -i s/stylus/test/ ../../test/*.css
sed -i s/stylus/test/ ../../test/**/*.css
