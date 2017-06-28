import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindComponent } from './remind.component';

describe('RemindComponent', () => {
  let component: RemindComponent;
  let fixture: ComponentFixture<RemindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
