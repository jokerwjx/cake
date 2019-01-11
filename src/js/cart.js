//购物车页的业务逻辑
require(["./require.config"], () => {
    //引入detail需要的模块
    require(["jquery", "cookie", "header", "footer"], () => {
        $(function () {
            class Cart {
                constructor() {
                    this.init()
                };
                init() {
                    var table = $("#cart_table");//找到table
                    var arr = [];
                    var str1 = '';

                    str1 = $.cookie("cart");
                    arr = JSON.parse(str1);

                    var str2 = "";
                    console.log(str1);
                    console.log(arr);
                    for (var value of arr) {
                        
                        str2 += `<tr>
                    <td>
                        <dl>
                            <dd></dd>
                                <dt><img src:"`+ value.img + `"alt:"` + value.num + `"/></dt>
                                <dd>`+ value.spm + `</dd>
                    </dl>
                </td>
                        <td>14x14cm</td>
                        <td >240积分</td>
                        <td id="dj">`+ value.jg + `</td>
                        <td><a href="javascript:;">
                            <i id="cart_ione">-</i>
                            <span id="cart_span">`+ value.sl + `</span>
                            <i id="cart_itwo">+</i>
                            </a>
                        </td>
                        <td >￥<a id="cart_zj">`+ value.tojg + `</a>元</td>
                        <a href="##;"><td class="cart_scbtn">删除</td></a>
                </tr>`;
                    }
                    $("#cart_tbody").html(str2);

                    sums();

                  /*  $("#cart_table").on("click", function (e) {
                        var target = e.target;//找到点击元素
                        console.log(target)
                        var tr = target.parentNode.parentNode;//找到当前行
                        var notd = $("td", tr).text();
                        if ($(target).hasClass("cart_scbtn")) {
                            $(target).parents("tr").remove();
                            // if (typeof arr === "string") {
                                // takeOut();
                                // str1 = $.cookie("cart");
                                // arr = JSON.parse(str1);
                            // }
                            // for (var key in arr) {     //遍历找到点击所对应的json对象在数组中的下标,找到就跳出;
                            //     if (arr[key].num == notd) {
                            //         break;
                            //     }
                            // }
                            // arr.splice(key, 1);//在数组中删除相应的数组下标；

                            sums();
                            // cook();
                        }
                        

                    })*/

                    function sums() {//计算总价
                        var atr = $("#cart_tbody tr");//找到tr的集合

                        var sum = 0;
                        for (var i = 0; i < atr.length; i++) {
                            var spans = $("#cart_zj", atr[i])//通过当前行tr，找到当前行的span；
                              
                            console.log(spans)
                            sum += Number(spans.text());

                            $("#cart_paypric").text("￥" + sum + "元");
                        }
                    }
                    function cook() { //将json对象转换为字符，添加cookie

                        var atr = $("#cart_tbody tr");//找到tr的集合
                        console.log(str1)
                        str1 = JSON.stringify(str1);
                        //判断是否删除完，如果没有内容，将cookie删除；
                        atr.length ? $.cookie("cart", str1, { expires: 3, path:"/" }) : $.cookie("cart","", { expires: -1 , path:"/" });

                    }
                }
            }
            new Cart();
        })
        
    })
})