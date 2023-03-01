import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-schedule-report',
  templateUrl: './mis-schedule-report.component.html',
  styleUrls: ['./mis-schedule-report.component.css']
})
export class MISScheduleReportComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private route:Router) { }
         
      misReprtForm= this.formBuilder.group({
        reprtType:[''],
        fromDate:[''],
        toDate:[''],
        region:[''],
        region_2:[''],
        area:[''],
        customerCode:[''],
        groupCode:['']
        
      });


      scheduleForm(){
        var reprtType=this.misReprtForm.get('reprtType')?.value;
        var fromDate=this.misReprtForm.get('fromDate')?.value;
        var toDate=this.misReprtForm.get('toDate')?.value;
        var region=this.misReprtForm.get('region')?.value;
        var region_2=this.misReprtForm.get('region_2')?.value;
        var area=this.misReprtForm.get('area')?.value;
        var customerCode=this.misReprtForm.get('customerCode')?.value;
        var groupCode=this.misReprtForm.get('groupCode')?.value;
        alert(reprtType+" "+ fromDate+" "+toDate+" "+region+" "+region_2+" "+area+" "+customerCode+" "+groupCode);
      }
      viewForm(){
        alert('View button clicked');
        
      }
  ngOnInit(): void {
  }

}
