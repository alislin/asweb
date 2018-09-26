# asweb
斧子演示(AxeSlide)网页演示端，仅供学习交流！
> 官方不支持单独导出html，所以就自己搞了搞，唉，职业病！

### 一、使用AxeSlide制作演示文稿
详见官方文档
![](https://raw.githubusercontent.com/wiki/inmyjs/asweb/images/wiki.png)

### 二、导出便携文档

![](https://raw.githubusercontent.com/wiki/inmyjs/asweb/images/wiki_1.png)
![](https://raw.githubusercontent.com/wiki/inmyjs/asweb/images/wiki_2.png)

文档名为AxeSlide.zip

### 三、拷贝关键文件

打开AxeSlide.zip

![](https://raw.githubusercontent.com/wiki/inmyjs/asweb/images/wiki_3.png)

拷贝work目录和context.json文件至asweb目录（拷贝前可先删除这两个文件）
![](https://raw.githubusercontent.com/wiki/inmyjs/asweb/images/wiki_4.png)

若在文档制作中加入特殊的字体，可一并拷贝font.json及resources/font目录，覆盖即可
![](https://raw.githubusercontent.com/wiki/inmyjs/asweb/images/wiki_5.png)
![](https://raw.githubusercontent.com/wiki/inmyjs/asweb/images/wiki_66.png)

### 四、启动web服务器

将asweb目录上传至web服务器，即可预览文档

移动端模式：
![](https://raw.githubusercontent.com/wiki/inmyjs/asweb/images/wiki_7.png)

PC端模式：
![](https://raw.githubusercontent.com/wiki/inmyjs/asweb/images/wiki_8.png)

### 五、增加跳转功能

在地址后面增加如下参数可以直接跳转到指定页面  
参数 `s` 需要跳转的页面，从 0 开始。   
参数 `delay` 为延迟秒数，默认为 4 秒。
```
?s=5&delay=10
```

