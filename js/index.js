/**
 * Created by 12159 on 2017/6/8.
 */
$(function () {
   
    //轮播图
     var items = $(".carousel-inner .item")

    $(window).on("resize",function () {
        var width = $(window).width();
        if(width>=768){
            $(items).each(function (index,value) {
                var item = $(this);
                var imgSrc = item.data("largeImage");
               
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"))
            })

        }
        else {
            $(items).each(function (index,value) {
                var item = $(this);
                var imgSrc = item.data("smallImage");
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'"></a>')
            })
        }
    }).trigger("resize");


    //轮播图的滑动
    var startX,endX;
    var carousel_inner = $(".carousel-inner")[0];

    //获取当前轮播图
    var carousel = $(".carousel");

    carousel_inner.addEventListener("touchstart",function (e) {
        startX = e.targetTouches[0].clientX;
    });
    
    carousel_inner.addEventListener("touchend",function (e) {
        endX = e.changedTouches[0].clientX;
        if(endX-startX>0){
            carousel.carousel("prev");
        }
        else if(endX-startX<0){
            carousel.carousel("next");
        }


    })

})


