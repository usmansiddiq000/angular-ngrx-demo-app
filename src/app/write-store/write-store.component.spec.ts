import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteStoreComponent } from './write-store.component';

describe('WriteStoreComponent', () => {
  let component: WriteStoreComponent;
  let fixture: ComponentFixture<WriteStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
