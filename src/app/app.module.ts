import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageRecipeComponent } from './recipe-page/page-recipe/page-recipe.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, PageRecipeComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
