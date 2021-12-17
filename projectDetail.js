$('.headB a:eq(0)').hover(function(){
  $('.bar:eq(0)').css('opacity','1');
}, function(){
  $('.bar:eq(0)').css('opacity','0');
})

$('.headB a:eq(1)').hover(function(){
  $('.bar:eq(1)').css('opacity','1');
}, function(){
  $('.bar:eq(1)').css('opacity','0');
})

$('.headB a:eq(2)').hover(function(){
  $('.bar:eq(2)').css('opacity','1');
}, function(){
  $('.bar:eq(2)').css('opacity','0');
})


let window_height;
let hero_height;
let doc_height;
let posTop_s1;
let posBottom_s1;
let posTop_s2;
let posBottom_s2;
let posTop_s3;
let posBottom_s3;
let posTop_s4;
let posBottom_s4;
let posTop_s5;
let posBottom_s5;

$( document ).ready(function() {
    getValues();
});

$(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
  
    
    if(scroll < posTop_s1){
      $('.sticky').removeClass('fixy');
      $('.sticky').removeClass('bottom');
    }
  
    if(scroll > posTop_s1){
      $('.sticky').removeClass('fixy');
      $('.sticky').removeClass('bottom');
      $('#s1 .sticky').addClass('fixy');
    }
    // if(scroll > posBottom_s1 ){
    //   $('.sticky').removeClass('fixy');
    //   $('.sticky').removeClass('bottom');
    //   $('#s2 .sticky').addClass('fixy');
    //   // $('.bottom').css({'max-height': window_height+'px'});
    // }
  
    // if(scroll > posTop_s2 ){
    //   $('.sticky').removeClass('fixy');
    //   $('.sticky').removeClass('bottom');
    //   $('#s2 .sticky').addClass('fixy');
    // }

    if( scroll > posBottom_s1 && scroll < posBottom_s2 ){
      $('.sticky').removeClass('fixy');
      $('.sticky').removeClass('bottom');
      $('#s2 .sticky').addClass('fixy');
    }

    if( scroll > posBottom_s2 && scroll < posBottom_s3 ){
      $('.sticky').removeClass('fixy');
      $('.sticky').removeClass('bottom');
      $('#s3 .sticky').addClass('fixy');
    }

    if( scroll > posBottom_s3 && scroll < posBottom_s4 ){
      $('.sticky').removeClass('fixy');
      $('.sticky').removeClass('bottom');
      $('#s4 .sticky').addClass('fixy');
    }

    if( scroll > posBottom_s4 && scroll < posBottom_s5 ){
      $('.sticky').removeClass('fixy');
      $('.sticky').removeClass('bottom');
      $('#s5 .sticky').addClass('fixy');
    }

    // if(scroll > posTop_s5 ){
    //   $('.sticky').removeClass('fixy');
    //   $('.sticky').removeClass('bottom');
    //   $('#s5 .sticky').addClass('fixy');
    //   // $('.sticky').addClass('bottom')
    // }
      
});

function getValues(){
  window_height = $(window).height();
  doc_height = $(document).height();
  hero_height = $('#hero-image').height(); 
  
  //get heights first
  let height_s1 = $('#s1').height();
  let height_s2 = $('#s2').height();
  let height_s3 = $('#s3').height();
  let height_s4 = $('#s4').height();
  let height_s5 = $('#s5').height();
  
  //get top position second
  posTop_s1 = hero_height;  
  posTop_s2 = posTop_s1 + height_s1;
  posTop_s3 = posTop_s2 + height_s2;
  posTop_s4 = posTop_s3 + height_s3;
  posTop_s5 = posTop_s4 + height_s4;
  
  //get bottom position 3rd
  posBottom_s1 = posTop_s2 - hero_height;
  posBottom_s2 = posTop_s3 - hero_height;
  posBottom_s3 = posTop_s4 - hero_height;
  posBottom_s4 = posTop_s5 - hero_height;
  posBottom_s5 = doc_height;
}


let rtime;
let timeout = false;
let delta = 200;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
       getValues();
    }               
}












