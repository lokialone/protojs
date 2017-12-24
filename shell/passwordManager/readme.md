## 脚本指定解释器

use  `echo $SHELL to` to find shell type, 推荐使用/bin/sh,
例如在给数组赋值时，使用zsh解释器总是会报错,如下错误，并且网上教程很多都是基于sh/bash

``` 
    assignment to invalid subscript range
```

这个报错出现的原因是zsh环境下，数组的第一个下标是1 。。。

## 文件没有权限时，给脚本加上权限
`chmod +x test.sh`

## 查看电脑中安装的脚本解释器
`ls -l /bin/*sh`


## 创建文本菜单



## 遇到的问题

### 数组赋值不生效

```
list=()
i=0
cat './password'| while read line   #filename 使用管道会启用子进程，list的赋值会失效
do 
    list[i]=$line
    echo $line
    echo ${list[i]}
    ((i++))
done
echo "第一个元素为: ${list[0]}"

```
执行以上代码始终无法将list的值更改。

前面使用了管道把数据传给 while，管道会启动一个“子进程”，while是在子进程中执行的，子进程中的变量是不会返回到父进程中的，所以 while 结束后再看 list 是空的，因为 while 里的 list 是子进程的变量

改成如下即可

```
    list=()
    i=0
    while read line
    do
        list[${i}]=`echo ${line} | awk -F":" '{print $1}'`
        (( ++i ))
    done < password
    echo "${list[@]}"
    echo "第一个元素为: ${list[0]}"
```

