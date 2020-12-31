import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

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
