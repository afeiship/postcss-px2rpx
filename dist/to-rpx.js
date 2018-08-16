var PX_RE = /\d{0,}\.?\d+px/g;
var RPX = 'rpx';

module.exports = function (inRule, inOptions) {
    var matched = inRule.match(PX_RE);
    if (matched && matched.length > 0) {
        matched.forEach(function (match) {
            inRule = inRule.replace(
                match,
                inOptions.ratio * parseFloat(match) + RPX
            );
        });
        return inRule;
    }
    return inRule;
};