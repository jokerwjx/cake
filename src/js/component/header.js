define(["jquery","cookie"],()=>{
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
            }).then(()=>{
                this.login();
            })
        }
        login(){
            var username=$.cookie("username");
            console.log(username)
            if(username){
               $("#login_li").html("欢迎您，");
               $("#login_li1").html(username);
            }
        }
    }
    return new Header();
})