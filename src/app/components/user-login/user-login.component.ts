import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  account: Account = {
    Email: '',
    Password: ''
  };
  submitted = false;
  constructor(private accountService: AccountService) { }
  ngOnInit(): void {
  }
  loginUser(): void {
    debugger
    const data = {
      Email: this.account.Email,
      Password: this.account.Password
    };
    this.accountService.login(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}
