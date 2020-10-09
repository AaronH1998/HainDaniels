import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-product-details-field',
  templateUrl: './product-details-field.component.html',
  styleUrls: ['./product-details-field.component.scss']
})
export class ProductDetailsFieldComponent implements OnInit {
  @Input() field:string;
  @Input() name:string;
  @ViewChild('input') input;
  constructor() { }

  ngOnInit(): void {
  }

}
