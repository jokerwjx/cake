//首页的业务逻辑
require(["./require.config"],()=>{
    //引入index需要的模块
    require(["jquery","header","footer"],()=>{

        $(function(){
            //query对象可以直接使用
            //但是如果一个DOM对象要反复使用，最好用一个变量缓存一下
        
            let $imgs = $(".carousel ul li"),
                $btns = $(".carousel ol li");
            let index = 0;
        
            $btns.on("click", function(){
                //切换自己的样式
                $(this).addClass("ac").siblings().removeClass("ac");
        
                //图片隐藏显示切换
                $imgs.eq(index).removeClass("ac").animate({opacity: 0});
                $imgs.eq($(this).index()).addClass("ac").animate({opacity: 1});
                index = $(this).index();
        
            })
        
            //前后切换
            $("#carousel_goPrev").on("click", function(){
                //切换图片按钮，修改index得值
                $imgs.eq(index).removeClass("ac").animate({opacity: 0});
                $btns.eq(index).removeClass("ac");
                if(--index < 0) index = $imgs.length-1;
                $imgs.eq(index).addClass("ac").animate({opacity: 1});
                $btns.eq(index).addClass("ac");
                
        
            })
        
            $("#carousel_goNext").on("click", function(){
                $imgs.eq(index).removeClass("ac").animate({opacity: 0});
                $btns.eq(index).removeClass("ac");
        
                if(++index >= $imgs.length) index = 0;
        
                $imgs.eq(index).addClass("ac").animate({opacity: 1});
                $btns.eq(index).addClass("ac");
            })
        
        
            let timer = null;
        
            $(".carousel").hover(function(){
                clearInterval(timer);
            }, (function autoPlay(){
                timer = setInterval(() => {
                    $("#carousel_goNext").trigger("click");
                },3000);
                return autoPlay;
            })());
        
        })
         
    })
})

