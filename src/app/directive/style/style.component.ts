import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  @Input() color = 'blue';
  taille = 20;
  police = 'garamond';
  constructor() { }
  ngOnInit() {
  }
  changeSize(taille) {
    this.taille = taille ;
  }

}
