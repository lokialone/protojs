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
看了一下只是把class直接加上去而已，问题应该还是在z-index和tranfrom之间

##结论
添加transform时，当前这个元素会产生一个stack context, 与外部的stack context不一致，导致当前z-index无法使用。解决方案是不依赖z-index去控制堆叠关系，使用 translateZ来控制上下层级。或者使被遮盖的元素加上translate3d(0,0,0),但是添加transform会导致posistion:fixed失效成position:abolute,并不是无害的解决方案。
