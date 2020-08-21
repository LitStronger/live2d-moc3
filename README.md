# live2d-moc3
> 项目基于[AzurLaneL2DViewer](https://github.com/alg-wiki/AzurLaneL2DViewer)修改

#### 8.20 已经能用了

**Demo**: 

- 网页全屏示例：[litstronger.github.io/live2d-moc3/](https://litstronger.github.io/live2d-moc3/)

- 博客看板示例：

  - <https://litstronger.github.io/about/>

  - <https://litstronger.github.io/show/>

<a href="#more">示例截图</a>

### 可选参数

| 参数                  |      | default |                                                              |
| --------------------- | ---- | ------- | ------------------------------------------------------------ |
| width                 | 可选 | 800     | 宽度，单位为px                                               |
| height                | 可选 | 600     | 长度，单位为px                                               |
| top,right,bottom,left | 可选 | 0       | 模型到浏览器各边框的距离。选择两个即可定位，如定位在左下角：left: '0px' , bottom: '0px' |
| basePath              | 必须 | ""      | live2d模型资源库的路径                                       |
| role                  | 必须 | ""      | 角色模型对应的文件夹（即basePath下的文件夹                   |
| background            | 可选 | ""      | 背景图片，可填入图片外链                                     |
| opacity               | 可选 | 1       | 模型透明度，0~1取值                                          |

下面示例中的basePath为[原项目](https://github.com/alg-wiki/AzurLaneL2DViewer)经jsdeliver的cdn加速后的模型资源路径，该basePath下可用的角色模型可到[原项目AzurLaneL2DViewer](<https://github.com/alg-wiki/AzurLaneL2DViewer/tree/gh-pages/assets>)查看。当然，你也可以从其他地方引入moc3类型的模型角色，只需指定相应的basePath和role参数

**Tip：** 怎么判断是不是moc3的模型？ 查看模型文件内容，如图则是

<img src="https://cdn.jsdelivr.net/gh/litstronger/pic@master/project/live2d-moc3/moc3.png" />



### 示例

复制这段代码保存到空的html文件中，在浏览器打开即可

```html
<!DOCTYPE html>
<html >
<head>
    <meta charset="UTF-8">
    <title>live2d-demo</title>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

    <!-- Live2DCubismCore -->
    <script src="https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/frame/live2dcubismcore.min.js"></script>
    <!-- Include Pixi. -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.6.1/pixi.min.js"></script>
    <!-- Include Cubism Components. -->
    <script src="https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/live2dcubismframework.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/live2dcubismpixi.js"></script>

    <!-- User's Script -->
    <script src="https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/l2d.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/main.js"></script>
    <style>
    </style>
</head>
<body>
    <!-- Canvas -->
    <div class="Canvas"  id="L2dCanvas"></div>
    <script>
        var config = {
            width: window.innerWidth,	/*窗口最大宽度*/
            height: window.innerHeight, /*窗口最大高度*/
            left: '0px',
            bottom: '0px',
            basePath: 'https://cdn.jsdelivr.net/gh/alg-wiki/AzurLaneL2DViewer@gh-pages/assets',
            role: 'bisimai_2',
            background: 'https://cdn.jsdelivr.net/gh/alg-wiki/AzurLaneL2DViewer@gh-pages/assets/bg/bg_church_jp.png',
            opacity: 1
        }
        var v = new Viewer(config);
    </script>
</body>
</html>
```

### 示例截图

<img src="https://cdn.jsdelivr.net/gh/litstronger/pic@master/project/live2d-moc3/demo1.webp" />

<img src="https://cdn.jsdelivr.net/gh/litstronger/pic@master/project/live2d-moc3/demo3.webp" />

<img src="https://cdn.jsdelivr.net/gh/litstronger/pic@master/project/live2d-moc3/demo2.webp" />

<img src="https://cdn.jsdelivr.net/gh/litstronger/pic@master/project/live2d-moc3/demo4.webp" />

<img src="https://cdn.jsdelivr.net/gh/litstronger/pic@master/project/live2d-moc3/demo5.webp" />

<img src="https://cdn.jsdelivr.net/gh/litstronger/pic@master/project/live2d-moc3/demo6.webp" />



**By the way, 如果你喜欢本项目，就点个珍贵的star吧！** 

