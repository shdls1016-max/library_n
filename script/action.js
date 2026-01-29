function gnbAction(){
    let winW = $(window).width();
    let openGnb = $('.hd3').hasClass('on');

    /* 초기화 문구 추가해야할때 위치(아직 안 넣음) */
    

    


   

}


$('.hamburger').click(function(){
    $(this).toggleClass('on');
    $('.hd3').toggleClass('on');
    $('.hd3 .gnb').toggleClass('pc')
    $('.hd3 .gnb').toggleClass('on');

    if($('.hd3').hasClass('on')){
        $('body').addClass('no-scroll');
    } else{
        $('body').removeClass('no-scroll');
    }

})