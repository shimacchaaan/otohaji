/20210520 this/ 
$(function(){
  $('#lesson-show-mac').click(function(){
    $('#start-modal-mac').fadeIn();
    $('.map').css('display','none');
  });
  
  $('#lesson-show-win').click(function(){
    $('#start-modal-win').fadeIn();
  });
  
  $('#lesson-show-ds').click(function(){
    $('#start-modal-ds').fadeIn();
  });
  
//close 
  
  $('.close-modal').click(function(){
    $('#start-modal-mac').fadeOut();
    $('#start-modal-win').fadeOut();
    $('#start-modal-ds').fadeOut();
  });
  
//20210607.menu-img から　menu-modal にとぶ。 MAC  
  $('.menu-img-mac').click(function() {
    $('#system-modal-mac').fadeOut();
    $('.map').fadeOut();
    $('#menu-modal-mac').fadeIn();
  });
// menu から system-modal
  $('#system-mac').click(function() {
    $('#menu-modal-mac').fadeOut();
    $('#system-modal-mac').fadeIn();
    $('.map').fadeIn();
  });

  $('#system-btn-mac').click(function() {
    $('#menu-modal-mac').fadeOut();
    $('#system-modal-mac').fadeIn();
    $('.map').fadeIn();
  });

// system-modal から menu
  $('#menu-mac').click(function() {
    $('#system-modal-mac').fadeOut();
    $('.map').fadeOut();
    $('#menu-modal-mac').fadeIn();
  });
  
});
