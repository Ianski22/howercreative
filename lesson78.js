$(document).ready(function(){
    var scrollSpeed = 80; // Adjust scroll speed
    $("html, body").on("mousewheel", function(event, delta){
        this.scrollLeft -= (delta * scrollSpeed); // Horizontal scroll
        this.scrollTop -= (delta * scrollSpeed);  // Vertical scroll
        event.preventDefault(); // Prevent default scrolling behavior
    });
});
