$(function () { //Plug-In : ScrollMagic JS 사용

  //1. 컨트롤러 생성 (한번만)
  var controller = new ScrollMagic.Controller();

  //2. 사용할 변수
  var about1 = $('#about .content1 .c1');
  var about2 = $('#about .content1 .c2');
  var about3 = $('#about .content2 .c1');
  var about4 = $('#about .content2 .c2');

  var strength1 = $('#strength .c1');
  var strength2 = $('#strength .c2');
  var strength3 = $('#strength .c3');
  var strength4 = $('#strength .c4');

  var cer1 = $('#certificate .c1');
  var cer2 = $('#certificate .c2');
  var cer3 = $('#certificate .c3');
  var cer4 = $('#certificate .c4');

  var skill1 = $('#skill .c1 img');
  

  var bar1 = $('.bar1');
  var bar2 = $('.bar2');
  var bar3 = $('.bar3');
  var bar4 = $('.bar4');

  var Upbtn = $('.upBtn');

  var p = $('.p');
  var p1 = $('.p1');
  var p2 = $('.p2');
  var p3 = $('.p3');
  var p4 = $('.p4');
  var p5 = $('.p5');
  var p6 = $('.p6');

  var contact1 = $('#contact .c1');
  var contact2 = $('#contact .c2');

  //3. 타임라인
  var aboutT1 = new TimelineMax(); 
  var aboutT2 = new TimelineMax(); 
  var strengthT = new TimelineMax(); 
  var certificateT = new TimelineMax(); 
  var skillT1 = new TimelineMax(); 
  var skillT2 = new TimelineMax(); 
  var UpbtnT1 = new TimelineMax();
  var UpbtnT2 = new TimelineMax();
  var processT = new TimelineMax();
  var contactT = new TimelineMax();


  //4. GSAP : 타임라인 동안 동작할 애니메이션

  contactT.from(contact1, .7, {
    x:-40,
    opacity:0
  }).from(contact2, .7, {
    x:40,
    opacity:0
  });
  
  aboutT1.from(about1, .7, {
  x:-40,
  opacity:0

  }).from(about2, .7, {
  x:40,
  opacity:0
  });

  aboutT2.from(about4, .7, {
    x:40,
    opacity:0
  }).from(about3, .7, {
    x:-40,
    opacity:0
  });

  strengthT.from(strength1, .5, {
    y:-50,
    opacity:0
  }).from(strength2, .5, {
    y:-50,
    opacity:0
  }).from(strength3, .5, {
    y:-50,
    opacity:0
  }).from(strength4, .5, {
    y:-50,
    opacity:0
  })

  certificateT.from(cer1, .5, {
    y:100,
    opacity:0
  }).from(cer2, .5, {
    y:100,
    opacity:0
  }).from(cer3, .5, {
    y:100,
    opacity:0
  }).from(cer4, .5, {
    y:100,
    opacity:0
  })

  skillT1.from(bar1, 1, { x: -413 }).from(bar2, 1, { x: -413 }).from(bar3, 1, { x: -413 }).from(bar4, 1, { x: -413 });

  skillT2.from(skill1, .8, {
    scale: 2,
    opacity:0
  });

  UpbtnT1.to(Upbtn, .2, {
    backgroundColor: '#f5de58',
    color: '#000'
  });
  UpbtnT2.from(Upbtn, .3, {
    opacity: 0
  }).to(Upbtn, .2, {
    opacity: 1
  });

  processT.call(function () {
    p1.addClass("actProcess")

  }, null, null, .2).call(function () {
    p2.addClass("actProcess")

  }, null, null, .5).call(function () {
    p3.addClass("actProcess")

  }, null, null, .8).call(function () {
    p4.addClass("actProcess")

  }, null, null, 1);



  //5. ScrollMagic : 장면설정 

  var contact = new ScrollMagic.Scene({
    triggerElement: '#contact'

  }).setTween(contactT).addTo(controller);

  var skillProgress = new ScrollMagic.Scene({
    triggerElement: '#skill',
    triggerHook: 0.2

  }).setTween(skillT1).addTo(controller);

  var skillImage = new ScrollMagic.Scene({
    triggerElement: '#skill',
    triggerHook: 0.2

  }).setTween(skillT2).addTo(controller);


  var Upbtn1 = new ScrollMagic.Scene({
    triggerElement: '#contact',
    triggerHook: 0.8

  }).setTween(UpbtnT1).addTo(controller);


  var Upbtn2 = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0.8

  }).setTween(UpbtnT2).addTo(controller);


  var processCircle = new ScrollMagic.Scene({
    triggerElement: '#process',
    triggerHook: 0.8,
    scrollDirection: 'reverse'

  }).setTween(processT).addTo(controller).on("start", function () {

    processT.call(function () {
      p.removeClass('actProcess')
      p1.addClass("actProcess")

    }, null, null, 1).call(function () {
      p2.addClass("actProcess")

    }, null, null, 2).call(function () {
      p3.addClass("actProcess")

    }, null, null, 3).call(function () {
      p4.addClass("actProcess")

    }, null, null, 4).call(function () {
      p5.addClass("actProcess")

    }, null, null, 5).call(function () {
      p6.addClass("actProcess")

    }, null, null, 6)

  });


  var about1 = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0.5

  }).setTween(aboutT1).addTo(controller);

  var about2 = new ScrollMagic.Scene({
    triggerElement: '#about .content2',
    triggerHook: 0.5

  }).setTween(aboutT2).addTo(controller);

  var strength = new ScrollMagic.Scene({
    triggerElement: '#strength',
    triggerHook: 0.5

  }).setTween(strengthT).addTo(controller);

  var certificate = new ScrollMagic.Scene({
    triggerElement: '#certificate',
    triggerHook: 0.5

  }).setTween(certificateT).addTo(controller);



}); //jQuery End