import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { OrderManagementMaterialModule } from './Module/order-management-material/order-management-material.module';
import { OrderManagementRouterModule } from './Module/order-management-router/order-management-router.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrderNavComponent } from './order-nav/order-nav.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { OrderManagementModuleModule } from './Module/order-management-module/order-management-module.module';
import { AuthInterceptor } from './Module/Helper/auth-interceptor';

@NgModule({
  entryComponents: [
    AlertMessageComponent
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    OrderNavComponent,
    OrderDashboardComponent,
    AlertMessageComponent
  ],
  imports: [   
    OrderManagementRouterModule,
    OrderManagementMaterialModule,
    OrderManagementModuleModule       
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
