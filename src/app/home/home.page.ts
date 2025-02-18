import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeitorService } from '../model/leitor.service';
// import { RangeCustomEvent } from '@ionic/angular';
// import { RangeValue } from '@ionic/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
formTxt:FormGroup;


pinFormatter(value: number) {
  return `${value}%`;
}
  constructor(private ls:LeitorService,private fb:FormBuilder) {
this.formTxt = fb.group({
  texto:['',Validators.required],
  taxa:[0],
  tom:[1]

})
}
  falar(){
   
  }
ler(){
  this.ls.ler(this.formTxt.get('texto')?.value,
  this.formTxt.get('taxa')?.value,
  this.formTxt.get('tom')?.value)
    console.log(this.formTxt.get('taxa')?.value,
  this.formTxt.get('tom')?.value)
}
// vertaxa(event: Event){
//   this.taxa = (event as RangeCustomEvent).detail.value;
// }

// vertom(event: Event){
//   this.tom = (event as RangeCustomEvent).detail.value;
// }

parar(){
  this.ls.parar();
}

}
