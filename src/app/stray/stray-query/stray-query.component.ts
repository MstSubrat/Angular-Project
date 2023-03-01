import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-stray-query',
  templateUrl: './stray-query.component.html',
  styleUrls: ['./stray-query.component.css']
})
export class StrayQueryComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }

  strayQuery=this.formbuilder.group({
    strayS:[''],
    strayDateFrom:[''],
    strayDateTo:[''],
    region:[''],
    strayLoc:[''],
    status:[''],
    vehicleNo:[''],
    vehicleOrigin:[''],
    route:[''],
    commodity:['']
  });
  onSubmit(){
    var strayS = this.strayQuery.get('strayS')?.value;
    var strayDateFrom = this.strayQuery.get('strayDateFrom')?.value;
    var strayDateTo = this.strayQuery.get('strayDateTo')?.value;
    var region = this.strayQuery.get('region')?.value;
    var strayLoc=this.strayQuery.get('strayLoc')?.value;
    var status=this.strayQuery.get('status')?.value;
    var vehicleNo = this.strayQuery.get('vehicleNo')?.value;
    var vehicleOrigin = this.strayQuery.get('vehicleOrigin')?.value;
    var route = this.strayQuery.get('route')?.value;
    var commodity = this.strayQuery.get('commodity')?.value;
    window.alert(strayS + " " + strayDateFrom + " " + strayDateTo + " " + region + " "+ strayLoc +" " + status + " " + vehicleNo + " " + vehicleOrigin + " " + route + " " + commodity);
  }

  ngOnInit(): void {
  }

}
