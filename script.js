/20210520 this/ 
$(function(){
  $('#lesson-show-mac').click(function(){
    $('#start-modal-mac').fadeIn();
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
  
// menu から system-modal
  $('#system-mac').click(function() {
    $('#menu-modal-mac').fadeOut();
    $('#system-modal-mac').fadeIn();
  });

  $('#system-btn-mac').click(function() {
    $('#menu-modal-mac').fadeOut();
    $('#system-modal-mac').fadeIn();
  });

  
});
