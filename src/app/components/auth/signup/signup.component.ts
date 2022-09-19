import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  correct: string = '';
  error: string = '';
  user: FormGroup = this.fb.group({
    firstName: [
      '',
      [Validators.required, Validators.maxLength(15), Validators.minLength(3)],
    ],
    lastName: [
      '',
      [Validators.required, Validators.maxLength(15), Validators.minLength(3)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z\d]{5,}/),
      ],
    ],
    age: ['', [Validators.required, Validators.min(15), Validators.max(80)]],
  });
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  signup(data: any) {
    console.log(data);
    this.auth.signup(data).subscribe((res) => {
      if (res.message == 'Done') {
        this.correct = 'Success';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      } else {
        this.error = 'email is exist go to login';
        setTimeout(() => {
          this.error = '';
        }, 2000);
      }
    });
  }
  ngOnInit(): void {
    this.auth.islogin.subscribe(()=>{
      if(this.auth.islogin.getValue()){
        this.router.navigate(['/home']);
      }
    })
  }
}
