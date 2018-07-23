import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../login/login.component';
import { OrderDashboardComponent } from '../../order-dashboard/order-dashboard.component';

const pageRoutes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: OrderDashboardComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(pageRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class OrderManagementRouterModule { }
