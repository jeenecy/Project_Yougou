require(['./config'], () => {
    require(['header'], (header) => {
      class Index {
        constructor () {
          this.headerContainer = $("header")
          this.live()
        }
  live(){
    console.log(1)
  }
      }
      new Index()
    })
  })