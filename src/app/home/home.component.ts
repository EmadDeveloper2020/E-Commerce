import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,

      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 2
        }

      }
    })
  }



}
