$("#menu-toggle").click(function() {
    $("#sidebar-wrapper").toggle();
});




function resizeNav() {
    if ($(".navbar").height() > $('#godown').height()) {
        $('#godown').height($(".navbar").height() + 20)
    };
}

$(document).ready(function() {
    $(resizeNav());
});

$(window).resize(function() {
    $(resizeNav());
})