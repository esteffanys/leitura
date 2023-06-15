import { Injectable } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { TextToSpeech } from '@capacitor-community/text-to-speech';
@Injectable({
  providedIn: 'root'
})
export class LeitorService {

  constructor() {
    SpeechRecognition.requestPermissions();

  }
  async falar() {
    // const available =SpeechRecognition.available();
  }

  async ler(txt:string,taxa:number =1.0,tom:number=1.0){
    await TextToSpeech.speak({
      text: txt,
      lang: 'pt-BR',
      rate:taxa,
      pitch: tom,
      volume: 1.0,
      category: 'ambient',
    });

  }

  async parar() {
      await TextToSpeech.stop();
    }


  };

