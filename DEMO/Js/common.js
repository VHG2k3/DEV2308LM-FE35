
function myFunction() {
    var scroll = jQuery(window).scrollTop();
    if(scroll > 120){
        $("#top-head").hide();
    } else{
        $("#top-head").show();
    }
}