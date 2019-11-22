$(document).ready(function () {

    startTime();

    var viewHeight = $(window).height();
    var viewWidth = $(window).width();
    var navHeight = viewHeight * 0.92;
    var dragFlag = 0;
    navHeight = Math.round(navHeight);

    (function () {
        var elem = document.querySelector('#draggable');
        var draggie = new Draggabilly(elem, {
            axis: 'y',
            handle: '#handle'
        });
        var output = document.querySelector('code');

        draggie.setPosition(0, navHeight);

        function notify(dragEvent, draggieInstance, event, pointer) {
            var position = draggieInstance.position;
            var message = dragEvent + '\n' +
                event.type + ' at ' + pointer.pageX + ', ' + pointer.pageY + '\n' +
                'draggie position at ' + position.x + ', ' + position.y;
            output.textContent = message;
        }

        draggie.on( 'dragMove', function() {
          if(dragFlag === 0){
            if (draggie.position.y > navHeight || draggie.position.y >= 0.75*navHeight) {
              $("#handle").css("background","linear-gradient(to top left, rgba(124,252,0,0.8), rgba(204,255,0,0.8) )");
            }
            else if (draggie.position.y < 0.75*navHeight) {
              $("#handle").css("background","linear-gradient(to top left, rgba(124,252,0,1), rgba(204,255,0,1) )");
            }
          }
          else if(dragFlag === 1){
            if (draggie.position.y > navHeight || draggie.position.y >= 0.25*navHeight) {
              $("#handle").css("background","linear-gradient(to top left, rgba(124,252,0,0.8), rgba(204,255,0,0.8) )");
            }
            else if (draggie.position.y < 0.25*navHeight) {
              $("#handle").css("background","linear-gradient(to top left, rgba(124,252,0,1), rgba(204,255,0,1) )");
            }
          }
        });

        draggie.on('dragEnd', function (event, pointer) {
            /*notify('dragEnd', this, event, pointer);*/
            if(dragFlag === 0){
              if (draggie.position.y > navHeight || draggie.position.y >= 0.75*navHeight) {
                draggie.setPosition(0, navHeight); dragFlag = 0;
                console.log(draggie.position.y+"|"+navHeight);
              }
              else if (draggie.position.y < 0.75*navHeight) {
                draggie.setPosition(0,0); dragFlag =1;
                console.log(draggie.position.y+"|"+navHeight);
              }
            }
            else if(dragFlag === 1){
              if (draggie.position.y > navHeight || draggie.position.y >= 0.25*navHeight) {
                draggie.setPosition(0, navHeight); dragFlag = 0;
                console.log(draggie.position.y+"|"+navHeight);
              }
              else if (draggie.position.y < 0.25*navHeight) {
                draggie.setPosition(0,0); dragFlag =1;
                console.log(draggie.position.y+"|"+navHeight);
              }
            }
        });

    })();

    function startTime() {
      var today = new Date();
      var vjBannerDayList = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var vjBannerMonList = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var vjBannerDay = today.getDay();
      var vjBannerDate = today.getDate();
      var vjBannerMon = today.getMonth();
      var vjBannerHour = today.getHours();
      var vjBannerMin = today.getMinutes();
      vjBannerHour = addZero(vjBannerHour);
      vjBannerMin = addZero(vjBannerMin);
      $('#time').text(vjBannerHour + ":" + vjBannerMin);
      $('#day').text(vjBannerDayList[vjBannerDay] + ", " + vjBannerDate +" "+ vjBannerMonList[vjBannerMon]);
      var t = setTimeout(startTime, 500);
    }
    function addZero(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }
  
  });