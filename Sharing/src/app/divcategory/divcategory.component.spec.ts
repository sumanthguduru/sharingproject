import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivcategoryComponent } from './divcategory.component';

describe('DivcategoryComponent', () => {
  let component: DivcategoryComponent;
  let fixture: ComponentFixture<DivcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
