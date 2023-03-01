import { Component, OnInit } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ops-mbo',
  templateUrl: './ops-mbo.component.html',
  styleUrls: ['./ops-mbo.component.css']
})
export class OpsMboComponent implements OnInit {
  icon=faCalendar;

  constructor() { }

  ngOnInit(): void {
  }

}
