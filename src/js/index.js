// 写首页业务逻辑，需要依赖其他模块

// 首先引入config，配置的短名称就生效了，接下来再去require这些短名称就会根据config去加载对应的模块
// 包括模块里面对另外模块的依赖都可以使用短名称
require(['./config'], () => {
  require(['swiper','header', 'footer', ], (swiper,url, header) => {
    class Index {
      constructor () {
        this.headerContainer = $("header")
        this.cart()
        this.swiper()
        console.dir($)
      }

      cart () {
        // header里面的DOM由于是异步加载，所以在这里获取不到
        // 可以使用事件委托，把事件委托给本来就已经存在的contaiener
        this.headerContainer.on('click', '.select', function (e) {
          // jq里的on方法可以直接完成实际那委托而不用自己判断事件源
          // this指向事件源
          // console.log(this)
        })
      }

  
      renderHot (resBody) {
        // 第一个参数是模板的id，第二个参数是这个模板里面需要的数据
        let html = template('list-template', {
          list: resBody.list,
          bigImg: resBody.bigImg
        })
        // console.log(html)
        $("#list-container").html(html)


      }

      swiper() {
        new swiper('#bannerImg', {
            loop: true,
            speed: 1500,
            grabCursor: true,
            parallax: true,
            autoplay: {
                delay: 3000,
                //loop无效  stopOnLastSlide: true,
            },
            pagination: {
                el: '#bannerpagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.arrow-right',
                prevEl: '.arrow-left',
            },
        })

      }


    }
    new Index()
  })
})