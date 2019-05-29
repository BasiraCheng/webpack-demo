!function () {
  var view = document.querySelector('#topNavBar')
  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()//this.bindEvents.call(this)
    },
    bindEvents: function () {
      var view = this.view
      window.addEventListener('scroll', (x) => {
        if (window.scrollY > 0) {
          this.active()//这里的this就是用户触发的元素
        } else {
          this.deactive()
        }
      }) //箭头函数没有this
    },
    active: function () {
      this.view.classList.add('sticky')
    },
    deactive: function () {
      this.view.classList.remove('sticky')
    },

  }
  controller.init(view)//controller.init.call(controller,view)
}.call()