import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingPageComponent } from './testing-page/testing-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TestingPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestingPageComponent
      }
    ]),
  ]
})
export class TestingPageModule { }
