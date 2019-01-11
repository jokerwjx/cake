//注册的业务逻辑
require(["./require.config"],()=>{
    //引入register需要的模块
    require(["jquery","header","footer"],()=>{
        //注册的逻辑
        $("#regBtn").on("click",function(e){
            //localhost/api/v1/register.php
            //post
            //阻止表单默认提交
            e.preventDefault();
            e = e || e.event;
                var target = e.target || e.srcElement;
                var /*name=$("#username").val(),
                    tel=$("#tel").val(),
                    pw=$("#password").val(),
                    pws=$("#password2").val(),*/
                    regName=/^\w{2,10}$/,
                    regTel=/^1[34578]\d{9}$/,
                    regPsw=/^[\w_-]{5,16}$/;
            console.log(name)
            if($("#username").val()===""){
                alert("请输入用户名");
            }else if(!regName.test($("#username").val())){
                alert("用户名错误，请重试");
            }else if($("#tel").val()===""){
                alert("请输入电话号码");
            }else if(!regTel.test($("#tel").val())){
                alert("电话号码错误，请重试");
            }else if($("#password").val()===""){
                alert("请输入密码");
            }else if(!regPsw.test($("#password").val())){
                alert("密码错误，请重试");
            }else if($("#password2").val()===""){
                alert("请确认密码");
            }else if($("#password2").val()!==$("#password").val()){
                alert("确认密码失败请重试");
            }else{
                $.ajax({
                    url:"http://localhost/api/v1/register.php",
                    type:"post",
                    data:{
                        name:$("#username").val(),
                        phone:$("#tel").val(),
                        password:$("#password").val()
                    },
                   success:function(res){
                       if(res.res_code===1){
                         alert("注册成功，马上去登录");
                         location.href="/html/login.html"
                       }else{
                        alert("已有账户，赶快去登录吧");
                        location.href="/html/login.html"
					}
                   },
                   dataType:"json"
                })
            }
                
        })
    })
})