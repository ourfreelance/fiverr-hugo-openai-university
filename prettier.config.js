module.exports = {
  trailingComma : "es5",
  printWidth : 80,
  tabWidth : 2,
  proseWrap : "always",
  semi : false,
  singleQuote : false,
  overrides : [
    {
      files : [ "*.html" ],
      options : {
        parser : "go-template",
      },
    },
  ],
}

