import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecipeComponent } from './page-recipe.component';

describe('PageRecipeComponent', () => {
  let component: PageRecipeComponent;
  let fixture: ComponentFixture<PageRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
