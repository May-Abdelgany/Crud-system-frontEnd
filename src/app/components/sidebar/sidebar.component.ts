import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  isLogin: boolean = false;
  ngOnInit(): void {
    this.user();
  }
  user() {
    this.auth.islogin.subscribe(() => {
      if (this.auth.islogin.getValue()) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }
  logout() {
    localStorage.clear();
    this.auth.islogin.next(false);
    this.router.navigate(['/login']);
  }
}
