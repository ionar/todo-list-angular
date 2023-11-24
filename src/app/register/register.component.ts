import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  addUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private service: ConfigService, private router: Router) {}
  register() {
    console.log(this.addUserForm.value);
    this.service
      .addUser({
        name: this.addUserForm.value.name!,
        email: this.addUserForm.value.email!,
        password: this.addUserForm.value.password!,
      })
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
