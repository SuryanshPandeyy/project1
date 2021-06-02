$(".navbar-toggler").on("click", () => {
    $(".menu").addClass('show');
    $(".blocker").addClass('show_blocker');
});
$(".blocker").on("click", () => {
    $(".menu").removeClass('show');
    $(".blocker").removeClass('show_blocker');
})