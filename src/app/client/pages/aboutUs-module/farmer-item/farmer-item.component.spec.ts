import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerItemComponent } from './farmer-item.component';

describe('FarmerItemComponent', () => {
  let component: FarmerItemComponent;
  let fixture: ComponentFixture<FarmerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
