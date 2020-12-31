import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginPageComponent } from './login-page/login-page.component'
import { MainPageComponent } from './main-page/main-page.component'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { TimeTableComponentComponent } from './main-page/components/time-table-component/time-table-component.component'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { TimePlayerComponentComponent } from './main-page/components/time-player-component/time-player-component.component';
import { AuthPageComponent } from './auth-page/auth-page.component'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponentComponent } from './auth-page/login-component/login-component.component';
import { RegisterComponentComponent } from './auth-page/register-component/register-component.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TokenInterceptor } from './shared/classes/token.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    TimeTableComponentComponent,
    TimePlayerComponentComponent,
    AuthPageComponent,
    LoginComponentComponent,
    RegisterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
