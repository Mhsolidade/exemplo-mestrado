$(document).ready(function() {

    function scrollnav() {
        $(window).scroll(function(){
          var scroll = $(window).scroll();
            if (scroll > 5) {
                $("#navheader").css(  "background-color","aliceblue")
            } else {
                $("#navheader").css(  "background-color","#3333")

            }
        })
    };

    
});