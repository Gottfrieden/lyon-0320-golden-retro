$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 450) {
        //clearHeader, not clearheader - caps H
        $(".nav-platforms").addClass("shadow");
    } else {
    	$(".nav-platforms").removeClass("shadow");
    }
}); //missing );