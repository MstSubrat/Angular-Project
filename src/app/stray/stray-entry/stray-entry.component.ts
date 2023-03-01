import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stray-entry',
  templateUrl: './stray-entry.component.html',
  styleUrls: ['./stray-entry.component.css']
})
export class StrayEntryComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  strayEntry = this.formBuilder.group({
    strayDate: [''],
    image: [''],
    packDesc: [''],
    strayLoc: [''],
    desc: [''],
    vehicleNo: [''],
    vehicleOrigin: [''],
    route: [''],
    commodity: ['']
  });

  fileUpload = this.formBuilder.group({
    image2: ['']
  });

  onSubmit() {
    var strayDate = this.strayEntry.get('strayDate')?.value;
    var image = this.strayEntry.get('image')?.value;
    var packDesc = this.strayEntry.get('packDesc')?.value;
    var strayLoc = this.strayEntry.get('strayLoc')?.value;
    var desc = this.strayEntry.get('desc')?.value;
    var vehicleNo = this.strayEntry.get('vehicleNo')?.value;
    var vehicleOrigin = this.strayEntry.get('vehicleOrigin')?.value;
    var route = this.strayEntry.get('route')?.value;
    var commodity = this.strayEntry.get('commodity')?.value;
    window.alert(strayDate + " " + image + " " + strayLoc + " " + desc + " " + vehicleNo + " " + vehicleOrigin + " " + route + " " + commodity);
  }
  uploadImg() {
    var image2 = this.fileUpload.get('image2')?.value;
    window.alert(image2);
  }
  ngOnInit(): void {
  }

}
