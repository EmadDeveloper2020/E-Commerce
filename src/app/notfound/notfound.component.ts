import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  myImg: string = "../../assets/Images/404.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
