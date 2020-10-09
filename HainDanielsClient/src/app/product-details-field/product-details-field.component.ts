import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-product-details-field',
  templateUrl: './product-details-field.component.html',
  styleUrls: ['./product-details-field.component.scss']
})
export class ProductDetailsFieldComponent implements OnInit {
  @Input() field:string;
  @Input() name:string;
  @Input() type:string ;
  @Output() fieldChange = new EventEmitter<any>();
  @ViewChild('input') input;
  constructor() { }

  ngOnInit(): void {
  }

}
