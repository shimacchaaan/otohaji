/20210520 this/ 
$(function(){
  $('#lesson-show-mac').click(function(){
    $('#lesson-modal-mac').fadeIn();
  });
  
  $('#lesson-show-win').click(function(){
    $('#lesson-modal-win').fadeIn();
  });
  
  $('#lesson-show-ds').click(function(){
    $('#lesson-modal-ds').fadeIn();
  });
  
//close 
  
  $('.close-modal').click(function(){
    $('#lesson-modal-mac').fadeOut();
    $('#lesson-modal-win').fadeOut();
    $('#lesson-modal-ds').fadeOut();
  });
  
});
