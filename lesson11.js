$('.tab-list').each(function() {
    var $this = $(this);                           // Store the tab list
    var $tab = $this.find('li.active');            // Get the active tab
    var $link = $tab.find('a');                    // Get link from active tab
    var $panel = $($link.attr('href'));            // Get active panel

    $this.on('click', '.tab-control', function(e) { // When clicking a tab
        e.preventDefault();                        // Prevent link default behavior
        
        var $link = $(this);                       // Store the clicked link
        var id = this.hash;                        // Get href (panel ID) of clicked tab

        if (id && !$link.is('.active')) {          // If ID exists and link isn’t active
            $panel.removeClass('active');          // Deactivate current panel
            $tab.removeClass('active');            // Deactivate current tab

            $panel = $(id).addClass('active');     // Activate new panel
            $tab = $link.parent().addClass('active'); // Activate new tab
        }
    });
});
