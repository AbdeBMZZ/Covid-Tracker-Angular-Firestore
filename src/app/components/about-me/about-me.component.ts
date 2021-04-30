import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { 
    console.log(Math.floor((Math.random() * 3) + 1));
  }

  ngOnInit(): void {
  }

}
