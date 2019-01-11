//详情页的业务逻辑
require(["./require.config"], () => {
    //引入detail需要的模块
    require(["jquery", "url", "cookie", "header", "footer"], ($, url) => {
        $(function () {

            //获取id
            let arrSearch = location.search.slice(1).split("=");
            let searchObj = {};
            searchObj[arrSearch[0]] = arrSearch[1];
            $.ajax({
                url: url.baseUrlRap + "/detail",
                type: "GET",
                data: searchObj,
                dataType: "json",
                success: function (res) {
                    var json = res.res_body;
                    // console.log(json);
                    var p = $("#detail_title_p");
                    var title = json.title;
                    var price = json.price;
                    var text = json.text;
                    var img = json.img;
                    var num = json.id;
                    $("#detail_title_p").text(title); //赋值
                    $(".detail_title span").text(text); //赋值
                    $(".detail_title b").text(price); //赋值
                    $(".detail_sjnr p").text(title); //赋值
                    $(".detail_sjnr b").text( price); //赋值
                    $(".detail_left img").attr('src', img); //赋值
                    $(".detail_top img").attr('src', img);//赋值 
                    $(".detail_imgs img").attr('src', img);//赋值 
                    $(".detail_left img").attr('title', (num));//赋值

                    var i = $();
                    var j = $(".detail_span").text();
                    var i = parseInt(j);
                    $(".detail_itwo").on("click", function () {
                        i = i + 1;
                        $(".detail_span").text(i);
                    })
                    $(".detail_ione").on("click", function () {

                        if (i === 0) {
                            i = 0
                        } else {
                            i = i - 1;
                        }
                        $(".detail_span").text(i);
                    })

                    $(".detail_sc").on("click", function () {
                        alert("收藏成功")
                    })


                }
            })
            $(".detail_gm").on("click", function () {
                console.log(tojg);
                var spm = $("#detail_title_p").text(),
                    jg = $("#detail_title_b").text(),
                    sl = $(".detail_span").text(),
                    img = $(".detail_left img").attr('src'),
                    num = $(".detail_left img").attr('title'),
                    tojg = $(".detail_span").text() * $("#detail_title_b").text();
                    console.log(tojg);
                var gwobj = { spm, jg, sl, img, num, tojg };
                //console.log(gwobj)
                var arr = [];
                if ($.cookie("cart")) {
                   arr = JSON.parse($.cookie("cart"));
                } else {
                   arr = [];
                }

                var flag = true;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].id === gwobj.num) {
                        arr[i].sl++;
                        arr[i].tojg = Number(arr[i].sl * arr[i].jg);
                        flag = false;
                        break;
                    }
                }
                console.log(gwobj)
                console.log(arr)
                if (flag) {
                    arr.push(gwobj);
                }
                if (i === arr.length) {
                    arr.push(gwobj);
                }
                
                $.cookie("cart", JSON.stringify(arr), { path: "/" })
            })
        })
    })
})


