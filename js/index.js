(function (d) {
    var l2dCore = d.createElement('script')
    l2dCore.src = 'https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/frame/live2dcubismcore.min.js'
    var P = d.createElement('script')
    P.src = 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.6.1/pixi.min.js'
    var l2dF = d.createElement('script')
    l2dF.src = 'https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/live2dcubismframework.js'
    var l2dP = d.createElement('script')
    l2dP.src = 'https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/live2dcubismpixi.js'
    var l2d = d.createElement('script')
    l2d.src = 'https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/l2d.js'
    var main = d.createElement('script')
    main.src = 'https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/main.js'
    var sn = d.getElementsByTagName('script')[0]
    sn.parentNode.insertBefore(l2dCore, sn)
    sn.parentNode.insertBefore(P, sn)
    sn.parentNode.insertBefore(l2dF, sn)
    sn.parentNode.insertBefore(l2dP, sn)    
    sn.parentNode.insertBefore(l2d, sn)
    sn.parentNode.insertBefore(main, sn)
    console.log("script loading")
})(document)