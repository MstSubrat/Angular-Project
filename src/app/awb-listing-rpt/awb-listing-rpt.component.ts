import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-awb-listing-rpt',
  templateUrl: './awb-listing-rpt.component.html',
  styleUrls: ['./awb-listing-rpt.component.css']
})
export class AwbListingRptComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  awbReprtForm= this.formBuilder.group({
    altReprtType:[''],
    groupCode:[''],
    fromDate:[''],
    toDate:[''],
    status:['']
  });

  generateRprt(){
    var altReprtType=this.awbReprtForm.get('altReprtType')?.value;
    var groupCode=this.awbReprtForm.get('groupCode')?.value;
    var fromDate=this.awbReprtForm.get('fromDate')?.value;
    var toDate=this.awbReprtForm.get('toDate')?.value;
    var status=this.awbReprtForm.get('status')?.value;

    alert(altReprtType+" "+groupCode+" "+fromDate+" "+toDate+" "+status);

  }
  awbListing(){
    
  }

  ngOnInit(): void {
  }

}
