import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'std-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
