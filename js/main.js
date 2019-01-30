/* main.js 

// 자작 페이드 비주얼 배경
$(function() {

    var img_num = 1; // img_num=1이라는 변수지정
    var duration = 5000; // duration=5000이라는 변수 지정(재생시간)

    setInterval(function() {

        // 이미지 번호를 1씩증가 ++사용
        img_num++;

        if(img_num > 4) { // 이미지가 마지막(4)보다 크면은 다시 처음0으로 
            img_num=1;
        }

        $('#content .main-visual') // 메인 배너를 선택지정
            
        // fadeTo (시간ms, 투명도, 콜백함수)
        .fadeTo(500,0, function() {
               
        // 다음 이미지 변경
            $(this).css({
                backgroundImage: 'url(images/main-visual' + img_num + '.jpg)'
            })
        })
            .fadeTo(500,1) // 바뀐이미지를 Fade In
    }, duration)
});

이미지만 교체할때의 j-query 방식

$(function() {

    $('#content .main-visual')
        .css({
            backgroundImage: 'url("images/main-visual2.jpg")'
        });
});
*/

// j-query VEGAS BG PLUG-IN (배경 슬라이더 쇼)


$(function() {

    $("#content .main-visual").vegas({
        slides: [
            { src: "images/main-visual1.jpg" },
            { src: "images/main-visual2.jpg" },
            { src: "images/main-visual3.jpg" },
            { src: "images/main-visual4.jpg" },            
        ],
        timer: true, // 하단 진행그래프 설정 true 보임, false: 없앰.
        delay:3000,
    });
});

