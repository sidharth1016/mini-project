import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  title = 'mini-project';
  username: string = '';
  password: any;


  constructor(private router: Router) {

  }
  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      // alert('Login successful!');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password');
    }

  }
}
