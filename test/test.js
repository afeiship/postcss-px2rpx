var assert = require('assert');
var toRpx = require('../src/to-rpx');
var options = {
    ratio: 2
};

describe('toRpx core:', function () {

    it('padding:1px; -> padding:2rpx;', function () {
        var rs = toRpx('padding:1px', options);
        assert.equal(rs, 'padding:2rpx');
    });

    it('padding:0 10px; -> padding:0 20rpx;', function () {
        var rs = toRpx('padding:0 10px', options);
        assert.equal(rs, 'padding:0 20rpx');
    });

    it('padding:10.21px; -> padding:20.42rpx;', function () {
        var rs = toRpx('padding:10.21px', options);
        assert.equal(rs, 'padding:20.42rpx');
    });

    it('padding:0 4px 5px 6px 10px; -> padding:0 8rpx 10rpx 12rpx 20rpx;', function () {
        var rs = toRpx('padding:0 4px 5px 6px 10px', options);
        assert.equal(rs, 'padding:0 8rpx 10rpx 12rpx 20rpx');
    });
    
});
