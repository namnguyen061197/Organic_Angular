import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-email',
  templateUrl: './popup-email.component.html',
  styleUrls: ['./popup-email.component.css']
})
export class PopupEmailComponent implements OnInit {
  showPopup : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  displayPopUp(){
    this.showPopup = true;
  }

}
