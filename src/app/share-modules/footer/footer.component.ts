import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    listCateFooter = [
      {
        id : 1,
        name : 'INFOMATION',
        child : ['Site Map',
                'Search Terms',
                'Advanced Search',
                'About Us',
                'Contact Us',
                'Suppliers'
              ]

      },
      {
        id : 2,
        name : 'STYLE ADVISOR',
        child : ['You Acount',
                'Infomation',
                'Adresses',
                'Discount',
                'Orders History',
                'Additional Information'
              ]
      },
      {
        id : 3,
        name : 'QUICK LINKS',
        child : ['Blog',
                'FAQs',
                'Payment',
                'Shipment',
                'Where is my order?',
                'Return policy'
              ]
      },
      {
        id : 4,
        name : 'QUICK LINKS',
        child : ['Blog',
                'FAQs',
                'Payment',
                'Shipment',
                'Where is my order?',
                'Return policy'
              ]
      },
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
