import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiionsComponent } from './regiions.component';

describe('RegiionsComponent', () => {
  let component: RegiionsComponent;
  let fixture: ComponentFixture<RegiionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
