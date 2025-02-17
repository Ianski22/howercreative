 var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function onYouTubeIframeAPIReady() {
    new YT.Player('youtube-player', { // Updated ID
      height: '315',
      width: '560',
      videoId: '1yLqKZvJ0L0',
      playerVars: { 'start': 2, 'autoplay': 0, 'controls': 1 }
    });
  }
