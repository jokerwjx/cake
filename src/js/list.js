//列表的业务逻辑
require(["./require.config"], () => {
    //引入list需要的模块
    require(["jquery","item","url","header","footer"], ($,item,url) => {
        item.init(url.baseUrlRap+"/list");
    })
})
