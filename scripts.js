$(document).ready(function() {

    $("#envelope").click(function() {
        $("#envelope").hide();
        // $("#envelope").fadeOut();
        $("#p2").show();
    });
    $("#welcome").click(function() {
        $("#p2").hide();
        // $("#p2").fadeOut();
        $("#p3").show();
    });
});