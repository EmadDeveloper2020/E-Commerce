import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  myImg: string = "../../assets/Images/soon.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
