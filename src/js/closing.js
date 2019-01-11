//结算的业务逻辑
require(["./require.config"], () => {
    //引入closing需要的模块
    require(["jquery", "header", "footer"], () => {
        $(function () {
            let $discounts = $(".closing_youhui_p"),
                $discounts_box = $(".closing_youhui_nr");
            $discounts.on("click", function () {
                $discounts_box.toggle();
            })
        })
        $(function () {
            let $bill = $(".closing_fapiao_p"),
                $bill_box = $(".closing_fapiao_box");
            $bill.on("click", function () {
                $bill_box.toggle();
            })
        })

        $(function () {

            var str = $.cookie("cart");
            console.log($.cookie("cart"))
            var arr = [];
            takeOut();
            //根据cookie的状态判断提示购物车空的提示显示还是隐藏
            function takeOut() {
                //如果是空的，或者没有存数据，那就显示
                if (str === undefined || str == "[]") {
                    $("#shopping_replace").css({ display: "block" });
                } else {
                    arr = JSON.parse(str);
                }
            }
            var str2 = "";
            for (var value of arr) {
                console.log(value)
                str2 += `<tr>
                <td>
                    <dl>
                        <dt><img src:"`+ value.img + `"alt:"` + value.num + `"/></dt>
                        <dd>`+ value.spm+`</dd>
                    </dl>
                </td>
                <td>14x14cm</td>
                <td>240积分</td>
                <td>`+  value.sl +`</td>
                <td>￥`+ value.jg +`元</td>
            </tr>`;
            }
            $("#closing_tbody").html(str2);
          
        })
    })
})