import { Component , AfterViewInit} from '@angular/core';
declare let VANTA: any;

@Component({
  selector: 'portfolio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit  {

  ngAfterViewInit(): void {
    VANTA.BIRDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      birdSize: 1.50,
      wingSpan: 19.00,
      separation: 80.00,
      alignment: 100.00,
      cohesion: 100.00
    })
  }
}
