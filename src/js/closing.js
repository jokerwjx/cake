//结算的业务逻辑
require(["./require.config"],()=>{
    //引入closing需要的模块
    require(["jquery","header","footer"],()=>{
        $(function(){
            let $discounts=$(".closing_youhui_p"),
                $discounts_box=$(".closing_youhui_nr");
            $discounts.on("click",function(){
                $discounts_box.toggle();
            })
        })
        $(function(){
            let $bill=$(".closing_fapiao_p"),
                $bill_box=$(".closing_fapiao_box");
            $bill.on("click",function(){
                $bill_box.toggle();
            })
        })
    })
})