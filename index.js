$(".map").hover(function(){
    $(".animate").removeClass( "animate-out" );
    /*$(".animate").removeClass( "d-none" );*/
    $(".animate").addClass("animate-in");
},function(){
    $(".animate").addClass( "animate-out" ).delay(1000);
    /*$(".animate").addClass( "d-none" );*/
    $(".animate").removeClass("animate-in");
})

/*$( '.email-button' ).click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('.d-none').text()).select();
    document.execCommand("copy");
    $temp.remove();
    //$('tooltip').addClass('hover');
    //$( "#myTooltip" ).innerHTML = "Copied: " + $('.d-none').value;
});*/

$('.email-button').tooltip({
    trigger: 'click',
    placement: 'bottom'
  });
  
  function setTooltip(btn, message) {
    btn.tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }
  
  function hideTooltip(btn) {
    setTimeout(function() {
      btn.tooltip('hide');
    }, 1000);
  }
  
  // Clipboard
  
  var clipboard = new Clipboard('.email-button');
  
  clipboard.on('success', function(e) {
      var btn = $(e.trigger);
    setTooltip(btn, 'Copied');
    hideTooltip(btn);
  });