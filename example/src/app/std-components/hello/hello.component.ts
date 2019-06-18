import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'std-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent implements OnInit {
  @Input()
  world = 'world';

  @Output()
  toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
