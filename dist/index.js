var postcss = require('postcss');
var PX_RE = /\dpx/;
var RPX = 'rpx';
var IGNORE_UNIT = 'PX';

module.exports = postcss.plugin('postcss-px2rpx', function (inOptions) {
  return function (css) {
    var options = Object.assign({
      ratio: 2
    }, inOptions);
    // console.log(options);
    // Processing code will be added here
    css.walkRules(function (rule) {
      rule.walkDecls(function (decl, i) {
        var key = decl.prop;
        var value = decl.value;
        var parseValue = parseFloat(value);

        if (PX_RE.test(value)) {
          decl.value = options.ratio * parseValue + RPX;
        }

        if (~IGNORE_UNIT.indexOf(value)) {
          decl.value = parseValue + IGNORE_UNIT.toLocaleLowerCase();
        }

      });
    });
  }
});
