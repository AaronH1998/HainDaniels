import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
  title = "Export";
  fileTypes=[
    {name:'Products', value:'products', checked:false},
    {name:'Units of Conversion', value:'unitsOfConversion', checked:false},
    {name:'Items in', value:'itemsIn', checked:false}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  updateCheckedFileTypes(type,event){
    this.fileTypes.find(p=>p.name == type.name).checked = event.target.checked;
  }

  exportFiles(){
    let selectedTypes = this.fileTypes.filter(type=>type.checked).map(type=>type.value);
  }
}