import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
   account: Account = {
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Password: ''
  };
  submitted = false;
  constructor(private accountService: AccountService) { }
  ngOnInit(): void {
  }
  saveUser(): void {
    debugger
    const data = {
      FirstName: this.account.FirstName,
      LastName: this.account.LastName,
      Email: this.account.Email,
      Phone: this.account.Phone,
      Password: this.account.Password
    };
    this.accountService.create(data)
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

