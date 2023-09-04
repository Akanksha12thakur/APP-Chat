import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
     this.router.navigate(['/chat'])
     alert('login successful!!')
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., show error message to the user)
    }
  }
}
