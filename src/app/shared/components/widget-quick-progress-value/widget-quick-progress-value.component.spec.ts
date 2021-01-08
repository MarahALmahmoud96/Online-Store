import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetQuickProgressValueComponent } from './widget-quick-progress-value.component';

describe('WidgetQuickProgressValueComponent', () => {
  let component: WidgetQuickProgressValueComponent;
  let fixture: ComponentFixture<WidgetQuickProgressValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetQuickProgressValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetQuickProgressValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
