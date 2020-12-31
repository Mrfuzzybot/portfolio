import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { AuthService } from '../../shared/services/auth.service'

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription
  @Output() registered: EventEmitter<void> = new EventEmitter();

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(): void {
    this.form.disable()
    this.aSub = this.auth.register(this.form.value).subscribe(
      () => {
        console.log('Registered!')
        this.form.reset()
        this.registered.emit()
      },
      ({error}) => {this.form.enable()}
    )
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }
}
