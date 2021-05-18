function OpenVideo(video) {
    window.open('video.html?' + video, '_self', false);
}
document.getElementById('video_content').innerHTML = '<video class="video_content" width="1880" height="875" src="movies/' + location.search.replace('?', '') + '" controls></video>'