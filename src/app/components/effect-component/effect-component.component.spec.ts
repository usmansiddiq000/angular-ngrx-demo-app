import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectComponentComponent } from './effect-component.component';

describe('EffectComponentComponent', () => {
  let component: EffectComponentComponent;
  let fixture: ComponentFixture<EffectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
