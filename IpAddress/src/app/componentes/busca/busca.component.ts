import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  public ipText: any;


  @Input() public location:any;

  constructor() { }

  ngOnInit(): void {
  }

  EnviarIp(){
    console.log(this.ipText)
  }
}
