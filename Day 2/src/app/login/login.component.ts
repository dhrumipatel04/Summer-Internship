import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Import FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  onSubmit() {
    console.log(this.loginData);
    if (
      this.loginData.email === 'test@example.com' &&
      this.loginData.password === '1234'
    ) {
      alert('Login Successful');
    } else {
      alert('Invalid Credentials');
    }
  }
}
