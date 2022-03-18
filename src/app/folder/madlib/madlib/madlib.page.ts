import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madlib',
  templateUrl: './madlib.page.html',
  styleUrls: ['./madlib.page.scss'],
})
export class MadlibPage implements OnInit {
message;
  constructor() { }

  ngOnInit() { 

let container = prompt('Enter a container')



this.message = 'Dont forget your lunch '

  }

}
