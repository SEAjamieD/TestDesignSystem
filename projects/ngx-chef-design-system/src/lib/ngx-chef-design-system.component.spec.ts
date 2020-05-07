import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChefDesignSystemComponent } from './ngx-chef-design-system.component';

describe('NgxChefDesignSystemComponent', () => {
  let component: NgxChefDesignSystemComponent;
  let fixture: ComponentFixture<NgxChefDesignSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChefDesignSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChefDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
