$("#menu-toggle").click(function() {
    $("#sidebar-wrapper").toggle();
});




function resizeNav() {
    if ($(".navbar").height() > $('#godown').height()) {
        $('#godown').height($(".navbar").height() + 10)
    };
}

$(document).ready(function() {
    $(resizeNav());
});

$(window).resize(function() {
    $(resizeNav());
})


$(document).ready(function() {
    $("select").selectpicker({
        style: 'btn-primary',
        menuStyle: 'dropdown-inverse'
    });
});

$("select").select2({
    ".mbl": 'dropdown-inverse'
});