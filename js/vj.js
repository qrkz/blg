/*
$(document).ready(function() {
    $("ul.tabs").tabs({
        swipeable: true,
        responsiveThreshold : Infinity
    });
});
  
$(function() {
    var container = document.getElementById("tabContainer");
    var rail = $("#top-tabs-container");
    var width = $("#firstTab").outerWidth();
    
    Hammer(container).on("swipeleft", function() {
        rail.animate({scrollLeft: "+="+width}, "slow");
    }).set({ threshold: 300 });
    Hammer(container).on("swiperight", function() {
        rail.animate({scrollLeft: "-="+width}, "slow");
    }).set({ threshold: 300 });

});
*/
$(document).ready(function(){
    $('#vjTabsBar').flickity({
        // options
        contain: true,
        cellAlign: 'left',
        asNavFor: '#vjTabContents',
        prevNextButtons: false,
        pageDots: false,
    });

    $('#vjTabContents').flickity({
        prevNextButtons:false,
        pageDots: false,
        contain:true,
    });
});

$(document).ready(function toggleFullScreen() {
    var doc = window.document;
    var docEl = doc.documentElement;
  
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  
    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
      requestFullScreen.call(docEl);
    }
    else {
      cancelFullScreen.call(doc);
    }
  });