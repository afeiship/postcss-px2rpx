# postcss-px2rpx
> Postcss plugin transform px to rpx for weapp.

## usage:
```css
body{
  color: #f00;
  /* Case1: */
  width: 200PX;

  /* Case2: */
  border: 10px;

  /* Case3: */
  font-size: 12.34px;

  /* Case4: */
  border: 10px solid #f00;

  /* Case5: */
  border-left:12.33px solid #f00;

  /* Case6: */
  border:1PX solid #f00;

  /* Case7: */
  padding: 0 10px;
}


/* => */
body{
  color: #f00;
  /* Case1: */
  width: 200px;

  /* Case2: */
  border: 20rpx;

  /* Case3: */
  font-size: 24.68rpx;

  /* Case4: */
  border: 20rpx solid #f00;

  /* Case5: */
  border-left:24.66rpx solid #f00;

  /* Case6: */
  border:1px solid #f00;

  /* Case7: */
  padding: 0 20rpx;
}


```
## options

| Name  | Default | Description   |
| ----- | ------- | ------------- |
| ratio | 2       | 10px -> 20rpx |

