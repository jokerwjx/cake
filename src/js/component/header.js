define(["jquery"],()=>{
    class Header{
        constructor(){
            this.init();
        }
        init(){
            //加载header.html
            new Promise((resolve,reject)=>{
                $("header").load("/html/component/header.html",()=>{
                    resolve();
                })
            })
        }
    }
    return new Header();
})