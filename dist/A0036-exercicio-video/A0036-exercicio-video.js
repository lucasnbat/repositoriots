"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VideoPlayer {
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    playToggle() {
    }
    stop() {
    }
    iniciarEventos() {
        console.log('risos risos');
    }
}
exports.default = VideoPlayer;
const novoVideoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
novoVideoPlayer.iniciarEventos();
