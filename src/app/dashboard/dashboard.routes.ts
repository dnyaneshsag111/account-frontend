import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
const routes: Routes = [
    {
      path: 'dashboard',
      component: DashboardLayoutComponent,    
    },

  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
  })
  export class DashboardRouting {}