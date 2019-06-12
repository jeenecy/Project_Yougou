// 定义模块
// 在定义的时候去依赖其他模块
define(['jquery'], () => {
  class Header {
    constructor () {
      this.container = $("header")
      this.load().then(() => {
      this.search()
      })
    }

    load () {
      return new Promise(resolve => {
        this.container.load('/html/model/header.html', () => {
          resolve()
        })
      })
    }

    search () {
      // 搜索框的id="search-input"
      // 搜索按钮的id="search-btn"
      this.search = $("input_box")
      this.searchBtn = $("#btn-search")

      this.searchBtn.on('click', () => {
        let val = this.search.val()
        // 发送一个jsonp请求
        // https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su
        $.getJSON(`https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${val}&cb=?`, resp => {
          // resp就是jsonp接口返回的数据
          // 根据resp渲染下拉列表
          console.log(resp)
        })
      })

    }
  }
  return new Header()
});