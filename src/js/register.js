require(['./config'], () => {
    require(['header'], (header) => {
      class Index {
        constructor () {
          this.headerContainer = $("header")
          console.log(1)
        }
 
      }
      new Index()
    })
  })