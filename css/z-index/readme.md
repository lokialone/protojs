## 遇到的问题
在使用了animation动画时， 该动画滑动时总是会盖住其他element。尽管z-index设置了仍然无法正常展示改动画

在搜索时了解到

1. z-index 仅对 posistion: absolute、relative、fixed的elements生效，加了上去方向并没作用。
2. 看了 why-z-index-does-not-work-for-element-having-transform-translatey
其中提到 在transform的elements里添加,也没什么用。

```
    z-index: -1; /* Update this */
    position: relative; /* Add this */
```

https://stackoverflow.com/questions/32816750/why-z-index-does-not-work-for-element-having-transform-translatey?rq=1

3. 仔细想想还是应该翻下vue源码，看看他是如何执行transition的。
