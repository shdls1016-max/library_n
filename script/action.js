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
    $('.hd3 .loginset').toggleClass('on');

    if($('.hd3').hasClass('on')){
        $('body').addClass('no-scroll');
    } else{
        $('body').removeClass('no-scroll');
    }

})


//gnb hover시 subpage 알려주는 깜빡이 효과

/* $(function(){
    const $gnb = $('.gnb');
    const $cansub = $('.cansub');

    $gnb.on('mouseenter',function(){
        $cansub.removeClass('blink');

        $cansub[0].offsetWidth;
        $cansub.addClass('blink');
    });
}); */


$(function () {
  const $gnb = $('.gnb');
  const $cansub = $('.cansub');

  // cansub 없으면 blink 로직 자체를 실행하지 않음
  if ($cansub.length === 0) return;

  const $cansubParent = $cansub.closest('.gnb > li');

  function blinkCanSub() {
    $cansub.removeClass('blink');

    // DOM 존재할 때만 reflow
    $cansub[0].offsetWidth;

    $cansub.addClass('blink');
  }

  /* PC */
  $gnb.on('mouseenter', function () {
    if (!$('.hamburger.mo').is(':visible')) {
      blinkCanSub();
    }
  });

  /* 모바일(햄버거) */
  $cansubParent.on('mouseenter', function () {
    if ($('.hamburger.mo').is(':visible')) {
      blinkCanSub();
    }
  });
});