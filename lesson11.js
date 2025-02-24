$('#tab-list').each(function () {
    var $this = $(this); 
    var $tab = $this.find('li.active');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));

    // When clicking on a tab
    $this.on('click', '.tab-control', function (e) {
        e.preventDefault(); // Prevent default link behavior

        var $link = $(this); // Store the clicked link
        var id = this.hash; // Get href of clicked tab

        if (id && !$link.is('.active')) {
            $panel.removeClass('active'); // Make current panel inactive
            $tab.removeClass('active'); // Make current tab inactive

            $panel = $(id).addClass('active'); // Make new panel active
            $tab = $link.parent().addClass('active'); // Make new tab active
        }
    });
});
