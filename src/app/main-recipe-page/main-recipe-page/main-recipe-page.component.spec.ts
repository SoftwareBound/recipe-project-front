import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRecipePageComponent } from './main-recipe-page.component';

describe('MainRecipePageComponent', () => {
  let component: MainRecipePageComponent;
  let fixture: ComponentFixture<MainRecipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRecipePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
