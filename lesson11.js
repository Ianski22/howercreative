$('.tab-list').each(function() {
    var $this = $(this);
    var $activeTab = $this.find('li.active');
    var $activeLink = $activeTab.find('a.tab-control');
    var $activePanel = $($activeLink.attr('href'));

    $this.on('click', '.tab-control', function(e) {
        e.preventDefault();
        var $link = $(this);
        var id = this.hash;

        if (id && !$link.parent().is('.active')) {
            $activePanel.removeClass('active');
            $activeTab.removeClass('active');
            $activePanel = $(id).addClass('active');
            $activeTab = $link.parent().addClass('active');
        }
    });
});
