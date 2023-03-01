import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Capx } from '../capx';
import { CapxService } from '../Service/capx.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-capx',
  templateUrl: './capx.component.html',
  styleUrls: ['./capx.component.css']
})
export class CapxComponent implements OnInit {
  capx :Capx=new Capx();

  constructor(private formBuilder: FormBuilder,private capxService:CapxService,private http:HttpClient) { }
   capxForm =this.formBuilder.group({
    reportTyp: [''],
    productTyp: [''],
    fromMonth: [''],
    toMonth: [''],
    transit: [''],
    location: [''],
    regions: ['']
  });

  getReport() {
    var reportTyp = this.capxForm.get('reportTyp')?.value;
    var productTyp = this.capxForm.get('productTyp')?.value;
    var fromMonth = this.capxForm.get('fromMonth')?.value;
    var toMonth = this.capxForm.get('toMonth')?.value;
    var transit = this.capxForm.get('transit')?.value;
    var location = this.capxForm.get('location')?.value;
    var regions = this.capxForm.get('regions')?.value;
    alert(reportTyp + " " + productTyp + " " + fromMonth + " " + toMonth + " " + transit + " " + location + " " + regions);
  }
  
  onSubmit(data:any){
    console.log(data);
    this.capxService.capxRprt(data).subscribe((result)=>{
          console.log(result);
    })
  }
  ngOnInit() {
  }
}
