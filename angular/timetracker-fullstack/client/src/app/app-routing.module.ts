import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthPageComponent } from './auth-page/auth-page.component'
import { MainPageComponent } from './main-page/main-page.component'
import { AuthGuard } from './shared/classes/auth.guard'
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component'
import { AboutPageComponent } from './about-page/about-page.component'

const routes: Routes = [
  {path: 'auth', component: AuthPageComponent},
  {path: '', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
      {path: '', component: MainPageComponent},
      {path: 'about', component: AboutPageComponent},
    ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
