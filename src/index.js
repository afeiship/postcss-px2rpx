var postcss = require('postcss');
var PX_RE = /\dpx/;
var RPX = 'rpx';
var PX_UPPER = 'PX';
var PX_LOWER = 'px';

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
        var parsedValue = parseFloat(value);

        if (PX_RE.test(value)) {
          decl.value = value.replace(
            parsedValue + PX_LOWER,
            options.ratio * parsedValue + RPX
          );
        }

        if (~value.indexOf(PX_UPPER)) {
          decl.value = value.replace(PX_UPPER, PX_LOWER);
        }
      });
    });
  }
});
