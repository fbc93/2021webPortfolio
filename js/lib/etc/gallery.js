$(function (){

//1. 윈도우가 로드될 때, Isotope 실행
$(window).load(function () {

  // g-menu button 클릭 활성화
  $('.g-menu>li').click(function (e) {
    var index = $(this).index();
    console.log(index);
    $('.g-menu>li>a').removeClass('gmenuOn');
    $('.g-menu>li>a').eq(index).addClass('gmenuOn');
    e.preventDefault();

  });


  // Isotope plugin - grid클래스의 변수선언
  var grid = $('.grid');

  // Isotope plugin 초기설정
  grid.isotope({
    resize: true,
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 0
    }
    
  });

  // 2. Isotope 필터 버튼 - all / design / website

  $('#all').click(function (e) {
    grid.isotope({
      filter: '.grid-item'
    });
    $('#works button').removeClass('btnActive');
    $(this).addClass('btnActive');
    e.preventDefault();
  });

  $('#web').click(function (e) {
    grid.isotope({
      filter: '.web'
    });
    $('#works button').removeClass('btnActive');
    $(this).addClass('btnActive');
    e.preventDefault();
  });

  $('#rwd').click(function (e) {
    grid.isotope({
      filter: '.rwd'
    });
    $('#works button').removeClass('btnActive');
    $(this).addClass('btnActive');
    e.preventDefault();
  });

  $('#webApp').click(function (e) {
    grid.isotope({
      filter: '.webApp'
    });
    $('#works button').removeClass('btnActive');
    $(this).addClass('btnActive');
    e.preventDefault();
  });

  $('#graphic').click(function (e) {
    grid.isotope({
      filter: '.graphic'
    });
    $('#works button').removeClass('btnActive');
    $(this).addClass('btnActive');
    e.preventDefault();
  });


  // 갤러리 라이트박스 : Magnific-Popup JS

  //이미지 갤러리
  $('.graphic').magnificPopup({
		delegate: '.button',
		type: 'image',
		gallery: {
			enabled: true,
    }
  });

  //컨텐츠 팝업창
  $('.popContent').magnificPopup({
    type:'inline',
    midClick: true 
  });




}); // Window Load



})//jQuery End