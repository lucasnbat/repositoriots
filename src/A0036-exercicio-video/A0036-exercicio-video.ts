/*eslint-disable*/

interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  //protocolos, funções que fazem experiência com o vídeo funcionar
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  //to mandando um grupo de atributos num construtor que formam um elemento chamado videoPlayerElements
  //ele é de tipo VideoPlayerElements, então possui os 3 atributos private acima
  //Informados os atributos, eles serão setados no this (que é a classe VideoPlayer) e formará uma nova instância
  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  playToggle(): void {

  }
  stop(): void {

  }
  iniciarEventos(): void {
    console.log('KKKKKKKKKKKKKK risos');
  }

}

const novoVideoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
})

novoVideoPlayer.iniciarEventos();
