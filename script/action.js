




/* let count = 0 

$('.toggleR').click(function(){
  count++
  $('.card').animate({left:-count*100+'%'},1000);
}) */

/*   let count = 0;
const cardWidth = 337 + 18; // 카드 너비(337px) + 간격(gap 18px)

$('.toggleR').click(function() {
    // 최대 카드 개수를 넘지 않도록 조건문을 추가하면 더 좋습니다.
    if (count < 3) { // 예: 카드가 6개고 화면에 3개 보인다면 3번만 클릭 가능
        count++;
        // 개별 카드(.card)가 아닌 전체 박스(.cardBox)를 움직입니다.
        $('.cardBox').animate({left: -(count * cardWidth) + 'px'}, 500);
    }
});


// 왼쪽 버튼: 카드를 오른쪽으로 다시 당기기
$('.toggleL').click(function(){
    if (count > 0) { // 맨 처음에 도달하면 더 이상 작동하지 않음
        count--;
        $('.cardBox').animate({left: -(count * cardWidth) + 'px'}, 500);
    }
}); */


const cardWidth = 337 + 18; // 카드 너비 + 간격

// 오른쪽 버튼: 무한 다음
$('.toggleR').click(function() {
    // 1. 전체 박스를 한 칸만큼 왼쪽으로 애니메이션
    $('.cardBox').stop().animate({ left: -cardWidth }, 500, function() {
        // 2. 애니메이션 완료 후: 맨 앞의 자식(li)을 맨 뒤로 이동
        $(this).append($(this).find('li:first'));
        // 3. 박스 위치를 즉시 0으로 리셋 (눈속임)
        $(this).css('left', 0);
    });
});

// 왼쪽 버튼: 무한 이전
$('.toggleL').click(function() {
    // 1. 클릭하자마자 맨 뒤의 자식(li)을 맨 앞으로 이동
    $('.cardBox').prepend($('.cardBox').find('li:last'));
    // 2. 박스 위치를 즉시 왼쪽으로 한 칸 밀어둠 (안 보이게 준비)
    $('.cardBox').css('left', -cardWidth);
    // 3. 다시 0 위치로 부드럽게 당겨옴
    $('.cardBox').stop().animate({ left: 0 }, 500);
});