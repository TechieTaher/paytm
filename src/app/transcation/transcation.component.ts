import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transcation',
  templateUrl: './transcation.component.html',
  styleUrls: ['./transcation.component.css']
})
export class TranscationComponent implements OnInit {

  @Input() mobileRechargeCheck = true;
  @Input() electicityCheck = false;
  @Input() broadbandCheck = false;
  constructor() { }

  ngOnInit() {
  }

}
