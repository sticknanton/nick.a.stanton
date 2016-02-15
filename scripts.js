$(function() {
  console.log("...loaded");

  //  $('data-slide').hide();
$('.my-slider').unslider({
  infinite: true,
  fluid: true,
  dots: true,
  arrows: true,
});
$('.prev').text('<');
$('.next').text('>');


  $('h2#expand').click(function(){
    console.log('clicked');
    $(this).parent('div').children('.details').toggle();
    var expand = $(this)[0].firstChild;
    console.log($(this)[0].firstChild.innerHTMl);
    $(this).find('i').toggleClass('fa-plus-square-o fa-minus-square-o')
          $('html, body').animate({scrollTop: '+=330px'}, 500);


  });
});
