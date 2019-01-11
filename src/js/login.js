//登录的业务逻辑
require(["./require.config"],()=>{
    //引入login需要的模块
    require(["jquery","header","footer","cookie"],()=>{
        //ajax登录
        //当登录成功之后，后端返回用户名
    $("#regBtn").on("click",function(e){
        e.preventDefault();
        e = e || e.event;
        var target = e.target || e.srcElement;
        $.ajax({
            url:"http://localhost/api/v1/login.php",
            type:"post",
            data:{
                username:$("#username").val(),
                password:$("#password").val()
               
            },     
           success:function(res){
            if(res.res_code===1){
                $.cookie("username",$("#username").val(),{path:"/"});
                alert("登录成功");
                location.href="/"
              }else{
                  alert("尚未注册")
              }
           },
           dataType:"json"
        })
        console.log( username)
        //用户名存cookie
        /*$.cookie("username",name,{path:"/"});
        location.href="/";*/
        })
    })
})