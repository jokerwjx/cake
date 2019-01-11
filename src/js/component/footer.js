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

    }
    return new Footer();
})