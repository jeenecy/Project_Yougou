require(["config"], () => {
    require(["template","url","header","footer","zoom"], (template,url,addCart,header) => {
        class Detail {
            constructor () {
                this.init();
                this.changeQuantity();
            }

            init () {
                //从url取到id， 携带id请求详情数据，渲染详情页
                let id = Number(location.search.slice(4));
                // console.log(res_code)
                // console.log(1)
                this.id = id;
                $.get(url.baseUrl + "/detail/get", {id}, resp => {
                    if(resp.res_code === 200) {
                        // console.log(resp,1)
                        let data = resp;    
                        // console.log(data,11111111)
                        // data = {...data, id};
                        this.render(data);
                    }
                })
            }


            render (data) {
                // console.log(data,2222222222)
                $("#detail-container").html(template("detail-template", {data}));
                this.zoom();
                this.changeQuantity();
                // new addCart($("#detail-container"),data);
            }

            zoom () {
                $("#exzoom").exzoom({
                    autoPlay: false,
                });//方法调用，务必在加载完后执行
        
            }

            changeQuantity () {
                let num = Number($("#num-input").val());
                $("#add-num").on('click', () => {
                    $("#num-input").val(++num);
                });

                $("#reduce-num").on('click', () => {
                    if(num <= 1)return;
                    $("#num-input").val(--num);
                });

            }
        }

        new Detail();
    })
})
