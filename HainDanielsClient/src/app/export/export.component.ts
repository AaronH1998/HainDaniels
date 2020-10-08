import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProductService } from '../services/product.service';

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
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  updateCheckedFileTypes(type,event){
    this.fileTypes.find(p=>p.name == type.name).checked = event.target.checked;
  }

  exportFiles(){
    let selectedTypes = this.fileTypes.filter(type=>type.checked).map(type=>type.value);
    selectedTypes.forEach(type => {
      this.productService.exportFile(type).subscribe((data)=>{
        
        let downloadUrl = window.URL.createObjectURL(data);
        let link = document.createElement('a');
        link.href = downloadUrl;
        link.download = `${type}.csv`;
        link.click();
      });
    });
  }
}