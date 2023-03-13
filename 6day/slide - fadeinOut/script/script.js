$(function()
{
    // 개별메뉴
    // 좌우슬라이드
    // setInterval : 일정시간동안 반복실행하는 메서드
    // .eq(변수) : 지정한 변수만 선택
    // .hover() : 마우스 올렸을때 
    // .fadein() : 선택한 요소를 서서히 나타냄
    // .gt(0) : 첫번째 요소인 0 이후의 요소를 다 선택
    // .hide() : 가리기
    // .show() : 보이기
    // .find(div) : 전체 찾기
    // .children() : 자식찾기
        
    // 페이드인아웃슬라이드

    var x=0;
    setInterval(function(){
        var next = (x+1)%3;
        $(".sliderList").find(div).eq(x).fadeOut(); //사라짐
        $(".sliderList").find(div).eq(next).fadeIn(); //나타냄
        x = next;
},3000); //3초
    
});

