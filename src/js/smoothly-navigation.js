!function () {
  var view = View('nav.menu')
  var controller = {
    view: null,
    aTags: null,
    init: function (view) {
      this.view = view
      this.initAnimation()
      this.bindEvents()
    },
    initAnimation: function () {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function (element) {
      let top = element.offsetTop // 通过element得到距离页面顶部的距离 // 以上四句话等于let top = document.querySelector(x.currentTarget.getAttribute('href')).offsetTop

      let currentTop = window.scrollY // 求出当前Top
      let targetTop = top - 80 // 求出目标Top
      let s = targetTop - currentTop // 求出总的路程s
      var coords = { y: currentTop }; // 起始位置：当前坐标：y，
      var t = Math.abs((s / 100) * 300) // 总的时间是s/100)*300的绝对值
      if (t > 500) { t = 500 } // 当时间大于500，我们就让它等于500
      var tween = new TWEEN.Tween(coords) // 起始位置
        .to({ y: targetTop }, t) // 结束位置和时间
        .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型：淡入淡出
        .onUpdate(function () { // coords.y已经变了
          window.scrollTo(0, coords.y) // 如何更新界面
        })
        .start(); // 开始缓动
    },
    bindEvents: function () {
      let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (x) => {
          x.preventDefault() // 阻止默认动作
          let a = x.currentTarget // 获取a标签
          let href = a.getAttribute('href') // 获取a标签上面写的href的原文
          let element = document.querySelector(href) // 根据href得到我们的元素
          this.scrollToElement(element)
        }
      }
    },
  }
  controller.init(view)
}.call()