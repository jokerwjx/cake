require.config({
    baseUrl :"/",

    paths:{
        "jquery":"libs/jquery/jquery-1.11.3.min",
        "cookie":"libs/jquery/jquery-plugins/jquery.cookie",
        "header":"js/component/header",
        "footer":"js/component/footer",
        "item":"js/component/item",
        "url":"js/component/url",
        "template":"libs/template-web"
    },
    //不符合AMD规范的模块，垫片
    shim:{
        "cookie":{
            deps:["jquery"]
        }
    }
})