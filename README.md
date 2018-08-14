# postcss-px2rpx
> Postcss plugin transform px to rpx for weapp.

## usage:
```css
body{
  color: #f00;
  width: 200PX;
  border: 10px;
  font-size: 12.34px;
  border: 10rpx;
}

/* => */
body{
  color: #f00;
  width: 200px;
  border: 20rpx;
  font-size: 24.68rpx;
  border: 10rpx;
}
```
## options

| Name  | Default | Description   |
| ----- | ------- | ------------- |
| ratio | 2       | 10px -> 20rpx |

