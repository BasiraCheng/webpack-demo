!function () {
  var specialTags = document.querySelectorAll('[data-x]'); // 添加offset类

  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset');
  }

  findClosestAndRemoveOffset();
  window.addEventListener('scroll', function (xxxxx) {
    findClosestAndRemoveOffset();
  }); //helper 

  function findClosestAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;

    for (let i = 1; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i; // minIndex就是离窗口顶部最近的元素
      }
    }

    specialTags[minIndex].classList.remove('offset');
    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#' + id + '"]');
    let li = a.parentNode;
    let brotherAndMe = li.parentNode.children;

    for (let i = 0; i < brotherAndMe.length; i++) {
      brotherAndMe[i].classList.remove('highlight');
    }

    li.classList.add('highlight');
  }

  let liTags = document.querySelectorAll('nav.menu > ul > li');

  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active');
    };

    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active');
    };
  }
}.call();