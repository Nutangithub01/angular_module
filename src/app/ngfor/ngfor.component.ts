import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  users = [
    {name:"nutan", phone: 212121212, addre:"sdfksdjflksdj",socialmedia:["facebook","insta", "yahoo"]},
    {name:"nutan", phone: 212121212, addre:"sdfksdjflksdj",socialmedia:["linkedIn","whatsapp", "yahoo"]},
    {name:"nutan", phone: 212121212, addre:"sdfksdjflksdj",socialmedia:["google","insta", "oracle"]}
  ]
}
