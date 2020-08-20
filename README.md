# live2d-moc3
> 项目基于[AzurLaneL2DViewer](https://github.com/alg-wiki/AzurLaneL2DViewer)修改

#### 8.20 已经能用了

### 可选参数

| 参数                  |      | default |                                                              |
| --------------------- | ---- | ------- | ------------------------------------------------------------ |
| width                 | 可选 | 800     | 宽度，单位为px                                               |
| height                | 可选 | 600     | 长度，单位为px                                               |
| top,right,bottom,left | 可选 | 0       | 模型到浏览器各边框的距离。选择两个即可定位，如定位在左下角：left: '0px' , bottom: '0px' |
| basePath              | 必须 | ""      | live2d模型资源库的路径                                       |
| role                  | 必须 | ""      | 模型角色对应的文件夹                                         |
| background            | 可选 | ""      | 背景图片，可填入图片外链                                     |
| opacity               | 可选 | 1       | 模型透明度，0~1取值                                          |

### 示例

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

