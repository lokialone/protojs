在移动端，光标的高度与line-height的高度保持一致而不是和font-size的高度保持一致。
解决办法。

不需要给input设置line-height。
或者设置line-height与font-size一致，其余高度由padding填充。