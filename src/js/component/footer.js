define(["jquery"],()=>{
    class Footer{
        constructor(){
            this.init();
        }
        init(){
            //加载foooter.html
            new Promise((resolve,reject)=>{
                $("footer").load("/html/component/footer.html",()=>{
                    resolve();
                })
            })

            $(function(){
                let $footer_p =$(".footer_p_one"),
                    $_footer_toggle_box= $(".footer_toggle_box");
                $footer_p.on("click",function(){
                    $_footer_toggle_box.toggle();
                })
            })
        }
    }
    return new Footer();
})