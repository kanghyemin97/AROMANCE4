
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100                                                          ) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

$(function(){
    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 100){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");
        }else{
            $("#header").removeClass("active");
            $("#header").addClass("deactive");
        }
    })

});
