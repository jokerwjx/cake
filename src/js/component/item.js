define(["jquery", "template"], ($, template) => {
    function Item() {

    }
    Item.prototype.init = function (url) {
        //得到url，然后去请求数据，渲染结构，再load到页面上
        console.log(url);
        new Promise((resolve, reject) => {
            $("#list_item").load("/html/component/item.html", () => {
                resolve();
            })
        }).then(() => {

            $.ajax({
                url: url,
                type: "get",
                success: function (res) {
                    if (res.res_code === 1) {
                        let list = res.res_body.data;
                        let html = template("list_template", { list: res.res_body.data });
                        $("#list_item ul").html(html);
                    }
                }
            })
        })
    }

    return new Item();
})