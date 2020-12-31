import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout()
    this.router.navigate(['/auth'])
  }
}
