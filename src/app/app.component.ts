import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GeneratePassword';

  password : string = '';
  includeLatters : boolean = false;
  includeNumbers: boolean= false;
  includeSymbols: boolean = false;
  length:number = 0;
  constructor(){

  }

  onButtonClick(){
    const numbers = '0123456789';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symblos = '~!@#$%^&*()_+=-?';
    let validchar = '';
    if(this.includeNumbers){
      validchar+=numbers;
    }
    if(this.includeLatters){
      validchar+=letters;
    }
    if(this.includeSymbols){
      validchar+=symblos;
    }
    let generatedPassword = '';
    for (let index = 0;index < this.length; index++){
      let index = Math.floor(Math.random()*validchar.length);
      generatedPassword+=validchar[index]
    }
    this.password = generatedPassword;
  }
  Password(){
    return this.password;
  }
  onChangeLatter(){
    this.includeLatters = !this.includeLatters;
  }
  onChangeNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeLength(value:string){
    //console.log(event);
    const parsedvalue = parseInt(value);
    if(!isNaN(parsedvalue)){
     this.length = parsedvalue;
    }
  }
}
