/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboutFirstColumnComponent } from './about-first-column.component';

describe('AboutFirstColumnComponent', () => {
  let component: AboutFirstColumnComponent;
  let fixture: ComponentFixture<AboutFirstColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutFirstColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutFirstColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
