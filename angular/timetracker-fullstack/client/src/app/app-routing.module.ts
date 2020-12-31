import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthPageComponent } from './auth-page/auth-page.component'
import { MainPageComponent } from './main-page/main-page.component'
import { AuthGuard } from './shared/classes/auth.guard'

const routes: Routes = [
  {path: 'auth', component: AuthPageComponent},
  {path: '', component: MainPageComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
