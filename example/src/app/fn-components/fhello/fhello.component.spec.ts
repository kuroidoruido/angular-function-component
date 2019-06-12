import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FHelloComponent } from './fhello.component';

describe('FhelloComponent', () => {
  let component: FHelloComponent;
  let fixture: ComponentFixture<FHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
