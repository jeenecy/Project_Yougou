// 配置当前项目需要使用的模块
require.config({
  // baseUrl 是项目根路径
  baseUrl: '/',
  paths: {
    // 给每一个模块起一个短名称，对应真实绝对路径
    // 注意，这个地方一定不能写后缀名
    jquery: 'libs/jquery-3.2.1',
    header: 'js/model/header',
    footer: 'js/model/footer',
    swiper: 'libs/swiper/js/swiper.min',
    rem:'js/model/rem',
    url:'js/model/url',
    template:'libs/art-template/template-web',
    zoom: "libs/jquery-plugins/jquery.exzoom",
    side: "js/module/side",
    fly: "libs/jquery-plugins/jquery.fly",
    cookie: "libs/jquery-plugins/jquery.cookie"
  },
  shim: {
    zoom: {
        deps: ["jquery"]
    },
    fly: {
        deps: ["jquery"]
    },
    cookie: {
        deps: ["jquery"]
    }
}
})