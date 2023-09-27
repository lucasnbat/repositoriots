/*eslint-disable*/

//interface que vai ser usada para criar um objeto vídeo qualquer com os elementos html
interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

//aqui você tem um um objeto que vai ser composto pelos elementos de controle do video
interface VideoPlayerProtocol {
  //protocolos, funções que fazem experiência com o vídeo funcionar
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

//classe que vai ser responsável por controlar o vídeo
export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  //to passando um objeto completo para o construtor da classe, de forma que os atributos da classe vão receber os atributos do objeto passado
  //ele é de tipo VideoPlayerElements, então possui os 3 atributos private acima
  //Informados os atributos, eles serão setados no this (que é a classe VideoPlayer) e formará uma nova instância
  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  //aqui vamos ter a implementação de métodos para o controlador de vídeo
  iniciarEventos(): void {
    //arrow function que o this será a classe, se eu usasse function() completa o this seria o botão
    //quando aciona o botão play ele vai chamar o método playToggle
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });
    //agora para o botão stop, temos que ele vai escutar o click e vai...
    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause(); //pausar video
      this.videoPlayer.currentTime = 0; //e volta video para tempo zero
      this.playButton.innerText = 'Play'; //e troca o playbutton da descrição que ele está para descrição "Play"
    })
  }
  //o método playToggle vai ser responsável por fazer o vídeo rodar ou pausar
  playToggle(): void {
    if (this.videoPlayer.paused) { //se vídeo pausado
      this.videoPlayer.play(); //o click vai fazer ele rodar
      this.playButton.innerText = 'Pause'; //e mostrar texto "pausar" para orientar user a ir ali para pausar quando precisar
    } else { //se estiver rodando video
      this.videoPlayer.pause(); //o click escutado pelo addEventListener vai gerar pausa
      this.playButton.innerText = 'Play'; //e trocar descrição para play para orientar user a clicar ali quando precisar rodar o video
    }
  }

  stop(): void {
    //
  }
}

const novoVideoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});

novoVideoPlayer.iniciarEventos();
