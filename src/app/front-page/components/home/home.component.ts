import { Component , AfterViewInit} from '@angular/core';
declare var VANTA: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit  {

  ngAfterViewInit(): void {
    VANTA.BIRDS({
      el: '#vanta', // element selector string or DOM object reference
      color: 0x000000,
      waveHeight: 20,
      shininess: 50,
      waveSpeed: 1.5,
      zoom: 0.75
    })
  }
}
