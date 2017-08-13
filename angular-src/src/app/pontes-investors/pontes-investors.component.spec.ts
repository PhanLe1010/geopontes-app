/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PontesInvestorsComponent } from './pontes-investors.component';

describe('PontesInvestorsComponent', () => {
  let component: PontesInvestorsComponent;
  let fixture: ComponentFixture<PontesInvestorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontesInvestorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontesInvestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
