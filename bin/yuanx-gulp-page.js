#!/usr/bin/env node

process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..'))
// /bin -> /yuanx-gulp-page -> package.json -> "main": "lib/index.js",

require('gulp/bin/gulp')