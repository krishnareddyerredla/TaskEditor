import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.navigate(['/tasks']);
  }

  onclick()
  {
    console.log("clicked tasks.");
    this._router.navigate(['/tasks']);
  }
}
