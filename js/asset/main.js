$(function () {

  //워크 갤러리 a테그 없애기
  $('#works .grid-item>a').removeAttr("href");
  $('#works .caption>div>a:first-child').removeAttr("href");
  

  

  //700대 미디어쿼리 전환시, work 영역  container-> container-fluid로 구현
  $(window).resize(function () {

    if ($(window).width() < 768) {

      $('#works>div').removeClass('container');
      $('#works>div').addClass('container-fluid');
    }

    if ($(window).width() > 768) {

      $('#works>div').addClass('container');
      $('#works>div').removeClass('container-fluid');
    }

  });

  // 슬라이더 첫장면
  $('.slider').on('init', function (event, slick) {
    // console.log('slick');
    setTimeout(function () {
      $('.slider').find('.slick-current').removeClass('slick-active').addClass('reset');
    }, 1000);

  });

  $('.slider').on('swipe', function (event, slick, direction) {
    console.log(direction);
    // left
  });

  //Slick.JS 슬라이더 구현

  $(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3400,
    pauseOnFocus: false
  });


  // 2. 부트스트랩 : 스크롤스파이
  $('body').scrollspy({
    target: '#navi',
    offset: 84
  })


  
   
//모바일 사이드메뉴
  $('#mobileBtn').click(function (e) {

    $('#gnb').animate({
      right: 15
    },300);

    $(this).animate({
      opacity: 0
    },300);

    e.preventDefault();
  });

  $('.closeBtn').click(function (e) {

    $('#gnb').animate({
      right: -330
    },300);

    $('#mobileBtn').animate({
      opacity: 1
    },300);

    e.preventDefault();
  });


   //3. 스크롤시, 네비게이션 fixed, class붙이기
  $(window).scroll(function () {

    var scrollPos = $(window).scrollTop();

    if (scrollPos > 84) {
      $('#navi').addClass('fixed');
    } else {
      $('#navi').removeClass('fixed');
    }
  });


  //4. 네비게이션 클릭시, 해당 컨텐츠로 슬라이드 이동
    var menuItem = $('#gnb a, #navi h1 a, .workWith a, .upBtn');

    function scrollToDiv(element, navHeight) {

      var offset = element.offset();
      var offsetTop = offset.top
      var totalScroll = offsetTop - navHeight;
  
      $('html, body').animate({
        scrollTop: totalScroll
      }, 800);
    }

    menuItem.click(function (e) {

      // 이동 대상의 href값 elWrapped로 한번 더 캐싱
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      // scrollToDiv함수 사용
      scrollToDiv(elWrapped, 84);
  
      //a링크 속성 삭제하여 번쩍거림 방지
      e.preventDefault();
    });

    



  
  

  //4. Plug-In : Jarallax JS 사용
  $('.jarallax').jarallax({});






}); //jQuery End