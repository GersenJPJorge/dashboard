import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports : [
    DashboardComponent,   // se tem rotas, tem que ter exports
  ]
})
export class DashboardModule { }
