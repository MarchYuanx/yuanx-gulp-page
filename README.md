# yuanx-gulp-page

[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Code Style][style-image]][style-url]

> HTML scaffold based on gulp

## Installation

```shell
$ npm install yuanx-gulp-page

# or yarn
$ yarn add yuanx-gulp-page
```

## Usage
```
yuanx-gulp-page clean

yuanx-gulp-page develop

yuanx-gulp-page build
```

## Folder Structure

```
└── my-awesome-pages ································· project root
   ├─ public ········································· static folder
   │  └─ favicon.ico ································· static file (unprocessed)
   ├─ src ············································ source folder
   │  ├─ assets ······································ assets folder
   │  │  ├─ fonts ···································· fonts folder
   │  │  │  └─ pages.ttf ····························· font file (imagemin)
   │  │  ├─ images ··································· images folder
   │  │  │  └─ logo.png ······························ image file (imagemin)
   │  │  ├─ scripts ·································· scripts folder
   │  │  │  └─ main.js ······························· script file (babel / uglify)
   │  │  └─ styles ··································· styles folder
   │  │     ├─ _variables.scss ······················· partial sass file (dont output)
   │  │     └─ main.scss ····························· entry scss file (scss / postcss)
   │  ├─ layouts ····································· layouts folder
   │  │  └─ basic.html ······························· layout file (dont output)
   │  ├─ partials ···································· partials folder
   │  │  └─ header.html ······························ partial file (dont output)
   │  ├─ about.html ·································· page file (use layout & partials)
   │  └─ index.html ·································· page file (use layout & partials)
   ├─ .csscomb.json ·································· csscomb config file
   ├─ .editorconfig ·································· editor config file
   ├─ .gitignore ····································· git ignore file
   ├─ .travis.yml ···································· travis ci config file
   ├─ CHANGELOG.md ··································· repo changelog
   ├─ LICENSE ········································ repo license
   ├─ README.md ······································ repo readme
   ├─ gulpfile.js ···································· gulp tasks file
   ├─ package.json ··································· package file
   └─ yarn.lock ······································ yarn lock file
```

## License

[MIT](LICENSE) &copy; MarchYuanx <592302815@qq.com>



[downloads-image]: https://img.shields.io/npm/dm/yuanx-gulp-page.svg
[downloads-url]: https://npmjs.org/package/yuanx-gulp-page

[version-image]: https://img.shields.io/npm/v/yuanx-gulp-page.svg
[version-url]: https://npmjs.org/package/yuanx-gulp-page

[license-image]: https://img.shields.io/github/license/marchyuanx/yuanx-gulp-page.svg
[license-url]: https://github.com/marchyuanx/yuanx-gulp-page/blob/master/LICENSE

[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: https://standardjs.com
