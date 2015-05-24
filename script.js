$(document).ready(function(){
  
function animated(completeWidth){
    	$('.bar').css({'display':'block','width':'0px'});      $('.bar').animate({width:completeWidth+'px' },3000,function(){
            $(this).css('display','none');
          });

    }

function animatebtn(completeWidth){
    	$('.inside').css({'display':'block','width':'0px'});      $('.inside').animate({width:completeWidth+'px' },3000,function(){
            $(this).css('display','none');
          });

    }  
  
  
  
  $('.container').on('click',function(e){
    //$(this).css({'display':'none'});
    $('.bar').css({'display':'block'});
    animated(220);
    e.preventDefault();
  });
  $('.container2').on('click',function(e){
    animatebtn(210);
    e.preventDefault();
  })
});