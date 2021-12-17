import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColRightBlogComponent } from './col-right-blog.component';

describe('ColRightBlogComponent', () => {
  let component: ColRightBlogComponent;
  let fixture: ComponentFixture<ColRightBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColRightBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColRightBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
