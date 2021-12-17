const state = {};
const carouselList = document.querySelector('.list');
const carouselItems = document.querySelectorAll('.item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.item');

  if (!isItem || newActive.classList.contains('item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);
  
  current.classList.remove('item_active');
  
  [current, prev, next, first, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current
  }

  return diff;
}

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




// project의 기본값(처음) //
$('.all').css('font-family', 'SCD8');
$('.uxui').css('font-family', 'SCD3');
$('.product').css('font-family', 'SCD3');
$('.all').css('transition','all 0.3s ease-in-out');
$('.eachproject .first').css({"background":"url(https://i.postimg.cc/bN0QwhXg/carousel-3.png)"});
$('.eachproject .second').css({"background":"url(https://i.postimg.cc/Jn5C60Dv/2.jpg)"});
$('.eachproject .third').css({"background":"url(https://i.postimg.cc/65SghnbT/Kakao-Talk-20211217-165540019.jpg)"});
$('.eachproject .fourth').css({"background":"url(https://i.postimg.cc/1Xh98bxc/4.jpg)"});
$('.eachproject .fifth').css({"background":"url(https://i.postimg.cc/QxNCG9DX/5.jpg)"});
$('.eachproject .sixth').css({"background":"url(https://i.postimg.cc/Xvx3gxZd/6.jpg)"});
$('.eachproject .seventh').css({"background":"url(https://i.postimg.cc/ZRV84kWn/7.jpg)"});
$('.eachproject .eighth').css({"background":"url(https://i.postimg.cc/PqLJNBVN/8.jpg)"});
$('.eachproject .ninth').css({"background":"url(https://i.postimg.cc/nVmdqr9G/9.jpg)"});
$('.eachproject .tenth').css({"background":"url(https://i.postimg.cc/5Nxwj2B0/10.jpg)"});
$('.eachproject .eleventh').css({"background":"url(https://i.postimg.cc/TPWbBL6k/11.jpg)"});
$('.eachproject .twelveth').css({"background":"url(https://i.postimg.cc/4yXhKWhM/12.jpg)"});

// project의 각 카테고리 누르면 바뀌게 //	
$('.all').click(function(){
$('.all').css('font-family', 'SCD8');
$('.uxui').css('font-family', 'SCD3');
$('.product').css('font-family', 'SCD3');
$('.all').css('transition','all 0.3s ease-in-out');
$('.eachproject .first').css({"background":"url(https://i.postimg.cc/bN0QwhXg/carousel-3.png)"});
$('.eachproject .second').css({"background":"url(https://i.postimg.cc/Jn5C60Dv/2.jpg)"});
$('.eachproject .third').css({"background":"url(https://i.postimg.cc/65SghnbT/Kakao-Talk-20211217-165540019.jpg)"});
$('.eachproject .fourth').css({"background":"url(https://i.postimg.cc/1Xh98bxc/4.jpg)"});
$('.eachproject .fifth').css({"background":"url(https://i.postimg.cc/QxNCG9DX/5.jpg)"});
$('.eachproject .sixth').css({"background":"url(https://i.postimg.cc/Xvx3gxZd/6.jpg)"});
$('.eachproject .seventh').css({"background":"url(https://i.postimg.cc/ZRV84kWn/7.jpg)"});
$('.eachproject .eighth').css({"background":"url(https://i.postimg.cc/PqLJNBVN/8.jpg)"});
$('.eachproject .ninth').css({"background":"url(https://i.postimg.cc/nVmdqr9G/9.jpg)"});
$('.eachproject .tenth').css({"background":"url(https://i.postimg.cc/5Nxwj2B0/10.jpg)"});
$('.eachproject .eleventh').css({"background":"url(https://i.postimg.cc/TPWbBL6k/11.jpg)"});
$('.eachproject .twelveth').css({"background":"url(https://i.postimg.cc/4yXhKWhM/12.jpg)"});
});


$('.uxui').click(function(){
  $('.uxui').css('font-family', 'SCD8');
  $('.all').css('font-family', 'SCD3');
  $('.product').css('font-family', 'SCD3');
  $('.uxui').css('transition','all 0.3s ease-in-out');
  $('.eachproject .first').css({"background":"url(https://i.postimg.cc/bN0QwhXg/carousel-3.png)"});
  $('.eachproject .second').css({"background":"url(https://i.postimg.cc/QxNCG9DX/5.jpg)"});
  $('.eachproject .third').css({"background":"url(https://i.postimg.cc/65SghnbT/Kakao-Talk-20211217-165540019.jpg)"});
  $('.eachproject .fourth').css({"background":"url(https://i.postimg.cc/PqLJNBVN/8.jpg)"});
  $('.eachproject .fifth').css({"background":"url(https://i.postimg.cc/wxPrQ9ZV/carousel-4.gif)"});
  $('.eachproject .sixth').css({"background":"url(https://i.postimg.cc/GhkwcrFq/ii.jpg)"});
  $('.eachproject .seventh').css({"background":"url(https://i.postimg.cc/3xBsvBbG/jj.jpg)"});
  $('.eachproject .eighth').css({"background":"url(https://i.postimg.cc/wjQpkH37/gg.jpg)"});
  $('.eachproject .ninth').css({"background":"url(https://i.postimg.cc/nVmdqr9G/9.jpg)"});
  $('.eachproject .tenth').css({"background":"url(https://i.postimg.cc/jjqrg9Jv/hh.jpg)"});
  $('.eachproject .eleventh').css({"background":"url(https://i.postimg.cc/gcDKJM4P/11.jpg)"});
  $('.eachproject .twelveth').css({"background":"url(https://i.postimg.cc/GpFXjbP4/12.jpg)"});
  });

    
    $('.product').click(function(){
      $('.product').css('font-family', 'SCD8');
      $('.all').css('font-family', 'SCD3');
      $('.uxui').css('font-family', 'SCD3');
      $('.product').css('transition','all 0.3s ease-in-out');
      $('.eachproject .first').css({"background":"url(https://i.postimg.cc/FsNLqLMs/carousel-1.jpg)"});
      $('.eachproject .second').css({"background":"url(https://i.postimg.cc/JzhB7W7f/carousel-2.jpg)"});
      $('.eachproject .third').css({"background":"url(https://i.postimg.cc/XqwDvCLY/carousel-5.jpg)"});
      $('.eachproject .fourth').css({"background":"url(https://i.postimg.cc/yYMV6v3y/d.jpg)"});
      $('.eachproject .fifth').css({"background":"url(https://i.postimg.cc/VkFL7X59/e.jpg)"});
      $('.eachproject .sixth').css({"background":"url(https://i.postimg.cc/0yt1Mnb4/f.jpg)"});
      $('.eachproject .seventh').css({"background":"url(https://i.postimg.cc/KzP9Lc0Y/g.jpg)"});
      $('.eachproject .eighth').css({"background":"url(https://i.postimg.cc/YS1NDnYn/h.jpg)"});
      $('.eachproject .ninth').css({"background":"url(https://i.postimg.cc/2STL1sdf/i.jpg)"});
      $('.eachproject .tenth').css({"background":"url(https://i.postimg.cc/Pxt7wGkm/project-10.png)"});
      $('.eachproject .eleventh').css({"background":"url(https://i.postimg.cc/rmXrncpr/project-11.png)"});
      $('.eachproject .twelveth').css({"background":"url(https://i.postimg.cc/0NfQyrFC/b.png)"});
      });

