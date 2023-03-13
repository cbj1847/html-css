$(function(){
    // 개별메뉴
    // 좌우슬라이드
    var x = 0;
    setInterval (function(){
        if(x<2){
            x++;
        }else{
            x=0;
        }
        var sp = x * (-300) + "px";
        $(".sliderList").animate({top:sp}, 400) //0.4초
        console.log(x);
    } ,3000); //3초
    // 텝메뉴
    // 레이어팝업
});

