var postcss = require('postcss');
var toRpx = require('./to-rpx');
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

        // toRpx logic:
        decl.value = toRpx(value, options);

        if (~value.indexOf(PX_UPPER)) {
          decl.value = value.replace(PX_UPPER, PX_LOWER);
        }
      });
    });
  }
});
