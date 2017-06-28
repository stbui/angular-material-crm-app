import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnelComponent } from './funnel.component';

describe('FunnelComponent', () => {
  let component: FunnelComponent;
  let fixture: ComponentFixture<FunnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
