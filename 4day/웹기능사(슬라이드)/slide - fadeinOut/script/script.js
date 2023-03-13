$(function(){
    // 개별메뉴
    // 좌우슬라이드
    var x = 0;
    // setInterval : 일정시간동안 반복실행하는 메서드
    // .eq(변수) : 지정한 변수만 선택
    // .hover() : 마우스 올렸을때 
    // .fadein() : 선택한 요소를 서서히 나타냄
    // .gt(0) : 첫번째 요소인 0 이후의 요소를 다 선택
    // .hide() : 가리기
    // .show() : 보이기
    // .find(div) : 전체 찾기
    // .children() : 자식찾기
        
    setInterval (function(){
        if(x<2){
            x++;
        }else{
            x=0;
        }
        var sp = x * (-1200) + "px";
        $(".sliderList").animate({left:sp}, 400) //0.4초
        console.log(x);
    } ,3000); //3초
    // 텝메뉴
    // 레이어팝업
});

