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

  iniciarEventos(): void {
    //arrow function que o this será a classe, se eu usasse function() completa iria ser this = botao
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });

    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause(); //ele pausa video
      this.videoPlayer.currentTime = 0; //e volta video para tempo zero
      this.playButton.innerText = 'Play';
    })
  }

  playToggle(): void {
    if (this.videoPlayer.paused) { //se vídeo pausado
      this.videoPlayer.play(); //o click vai fazer ele rodar
      this.playButton.innerText = 'Pause'; //e mostrar texto "pausar" para orientar user a ir ali para pausar
    } else { //se estiver rodando video
      this.videoPlayer.pause(); //o click vai gerar pausa
      this.playButton.innerText = 'Play'; //e trocar descrição para play
    }
  }

  stop(): void {

  }
}

const novoVideoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});

novoVideoPlayer.iniciarEventos();
