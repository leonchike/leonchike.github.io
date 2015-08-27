function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}



$(document).ready(function(){
    $("#termsofusefooter").click(function(){
        $("p").slideUp();
    });
});