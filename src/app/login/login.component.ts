import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from 'src/config/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private service: ConfigService, private router: Router) {}
  login() {
    console.log(this.loginForm.value);
    this.service
      .loginUser({
        name: this.loginForm.value.name!,
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!,
      })
      .subscribe(
        (response: any) => {
          console.log(response);

          if (response.status === 200) {
            this.router.navigate(['/sua-rota-de-redirecionamento']);
          }
        },
        (error) => {
          console.error('Erro ao fazer login:', error);
        }
      );
  }
}
