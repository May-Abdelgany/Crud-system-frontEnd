import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  correct: string = '';
  error: string = '';
  user: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z\d]{5,}/),
      ],
    ],
  });
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  login(data: any) {
    this.auth.login(data).subscribe((res) => {
      if (res.message == 'Done') {
        this.correct = 'Success';
        localStorage.setItem('user_id', res.result[0].id);
        this.auth.islogin.next(true);
        this.router.navigate(['/home']);
      } else {
        this.error = res.message;
        setTimeout(() => {
          this.error = '';
        }, 2000);
      }
    });
  }
  ngOnInit(): void {}
}
