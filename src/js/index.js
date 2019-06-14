// 写首页业务逻辑，需要依赖其他模块

// 首先引入config，配置的短名称就生效了，接下来再去require这些短名称就会根据config去加载对应的模块
// 包括模块里面对另外模块的依赖都可以使用短名称
require(['./config'],()=>{
  require(['swiper','template','url','header','footer','jquery'],(swiper,template,url,header,footer)=>{
    class Index {
      constructor () {
        this.headerContainer = $("header")
        this.cart()
        this.swiper()
        // console.dir($)
        this.renderMenu()
        this.renderHot()
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

      // first_introduce(){
      //   //负责渲染首页推荐模块

      //   $.get(url.baseUrl + '/intd/get',resp =>{
      //     // console.log(resp);检查resp能否接收到返回的数据
      //     // console.log(template)；检查template方法的调用
      //     if(resp.res_code ===200){
      //       this.renderHot(resp.res_body)
      //     }
      //   })
      // }

      // renderHot(resBody){
      //   //第一个参数是模板id，第二个参数是模板数据
      //   let html =template('list-introduce-template',{
      //     list: resBody.list
      //   })
      //   // console.log(html)//看一下控制台是否能输出渲染的数据
      //   $("#list-container").html(html)
      //   //让渲染好的数据打印到页面上
      // }

      //想做一个jqery插件的图片分割 失败了

      // tpfg(){
      //   $(function() {
  
      //     var fragmentConfig = {
      //       container : '.img-flex',//显示容器
      //       line : 10,//多少行
      //       column : 24,//多少列
      //       width : 1000,//显示容器的宽度
      //       animeTime : 10000,//最长动画时间,图片的取值将在 animeTime*0.33 + animeTime*0.66之前取值 
      //       img : '/images/banner.jpg'//图片路径
            
      //     };
          
      //     fragmentImg(fragmentConfig);
      //   })
      
      //  }

      renderMenu(){
        //负责渲染热销模块
      
        $.get(url.baseUrl + '/index/get',resp =>{
          // console.log(resp);检查resp能否接收到返回的数据
          // console.log(template)；检查template方法的调用
          if(resp.res_code ===200){
            this.renderHot(resp.res_body)
          }
          // console.log(resp.res_body)
        })
      }

      renderHot(resBody){
        //第一个参数是模板id，第二个参数是模板数据
        let html =template('menu-template',{
          menu: resBody.list
          
        })
        
        // console.log(html)//看一下控制台是否能输出渲染的数据
        $("#menu-container").html(html)
        //让渲染好的数据打印到页面上
      }
      //

     
      
    }
    new Index()
  })
})

