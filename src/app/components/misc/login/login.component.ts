import { SessionService } from './../../../shared/service/session.service';
import { print } from 'util';
import { User } from './../../../shared/model/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  apiError: string;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit() { }

  onSubmitLogin(loginForm) {
    this.sessionService.authenticate(this.user).subscribe(
      (user) => {
        loginForm.reset();
        this.router.navigate(['/home']);
      },
      (error) => {
        this.apiError = error.message;
      }
    );
  }
}
