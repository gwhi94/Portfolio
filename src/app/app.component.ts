import { Component, OnInit } from '@angular/core';
declare var VANTA;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class  AppComponent implements OnInit{
  title = 'George Whiting';
  config: any;
  fullpage_api: any;

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: '877B9219-D7E245F4-AAC299F7-86C5D048',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  ngOnInit(){
    VANTA.WAVES({
    el: "#header",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color:'#2a48cd'
    });

  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}
