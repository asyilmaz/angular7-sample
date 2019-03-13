import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangselectComponent } from './langselect.component';

describe('LangselectComponent', () => {
  let component: LangselectComponent;
  let fixture: ComponentFixture<LangselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
