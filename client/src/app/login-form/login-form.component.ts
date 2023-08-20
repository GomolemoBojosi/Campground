import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerMode: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  login() {
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
