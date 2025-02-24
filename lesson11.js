$('.tab-list').each(function() {
    var $this = $(this);                           // Store the tab list
    var $tab = $this.find('li.active');            // Get the active tab
    var $link = $tab.find('a.tab-control');        // Get link from active tab
    var $panel = $($link.attr('href'));            // Get active panel (e.g., #tab-photography)

    $this.on('click', '.tab-control', function(e) { // When clicking a tab link
        e.preventDefault();                        // Stop default link behavior
        
        var $link = $(this);                       // Store clicked link
        var id = this.hash;                        // Get href (e.g., #tab-webdesign)

        if (id && !$link.parent().is('.active')) { // If ID exists and tab isn’t active
            $panel.removeClass('active');          // Deactivate current panel
            $tab.removeClass('active');            // Deactivate current tab

            $panel = $(id).addClass('active');     // Activate new panel
            $tab = $link.parent().addClass('active'); // Activate new tab
        }
    });
});
