// 定义模块
// 在定义的时候去依赖其他模块
define(['jquery'], () => {
  class Footer {
    constructor () {
      this.container = $("footer")
      this.loadFooter()
    }

    loadFooter () {
      // 把header.html加载到页面的<footer>标签里
      this.container.load('/html/model/footer.html')
    }
  }

  return new Footer()
});