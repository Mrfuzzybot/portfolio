import { Component, OnDestroy, OnInit } from '@angular/core'
import { AuthService } from '../../shared/services/auth.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(): void {
    this.form.disable()
    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['']),
      ({error}) => {
        this.form.enable()
      }
    )
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }
}
