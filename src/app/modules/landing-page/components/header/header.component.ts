import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private host: ElementRef) {

  }
  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const header: HTMLElement = this.host.nativeElement.querySelector(".container");
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
  }
}
