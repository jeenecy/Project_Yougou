require(['./config'], () => {
    require(['template','url','header'], (template,url,header) => {
      class List{
        constructor () {
          this.headerContainer = $("header")
          this.hot()
        }
        
        hot(){
          //负责渲染热销模块
  
          $.get(url.baseUrl + '/hot/get',resp =>{
            // console.log(resp);检查resp能否接收到返回的数据
            // console.log(template)；检查template方法的调用
            if(resp.res_code ===200){
              this.renderHot(resp.res_body)
            }
          })
        }
        renderHot(resBody){
          //第一个参数是模板id，第二个参数是模板数据
          let html =template('list-template',{
            list: resBody.list
          })
          // console.log(html)//看一下控制台是否能输出渲染的数据
          $("#list-container").html(html)
          //让渲染好的数据打印到页面上
        }

      }

      new List()
    })
  })