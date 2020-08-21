(function (d) {
    /* Live2DCubismCore */
    var l2dCore = d.createElement('script')
    l2dCore.src = 'https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/frame/live2dcubismcore.min.js'
    var P = d.createElement('script')
    /* Pixi */
    P.src = 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.6.1/pixi.min.js'
    var l2dF = d.createElement('script')
    /* Cubism Components */
    l2dF.src = 'https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/live2dcubismframework.js'
    var l2dP = d.createElement('script')
    l2dP.src = 'https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/live2dcubismpixi.js'
    var l2d = d.createElement('script')
    /* user's script */ 
    l2d.src = 'https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/l2d.js'
    var main = d.createElement('script')
    main.src = 'https://cdn.jsdelivr.net/gh/litstronger/live2d-moc3@master/js/main.js'
    var sn = d.getElementsByTagName('script')[0]
    insertAfter(main, sn)
    insertAfter(l2d, sn)
    insertAfter(l2dP, sn)
    insertAfter(l2dF, sn)
    insertAfter(P, sn)
    insertAfter(l2dCore, sn)
    console.log("script loading")

})(document)