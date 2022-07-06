import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiayKhenComponent } from './giay-khen.component';

describe('GiayKhenComponent', () => {
  let component: GiayKhenComponent;
  let fixture: ComponentFixture<GiayKhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiayKhenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiayKhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
