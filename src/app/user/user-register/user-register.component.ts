import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  user: User = { id: 0, name: '', email: '' };

  constructor(private userService: UserService, private router: Router) {}

  registerUser(): void {
    this.userService.addUser(this.user).subscribe(() => {
      this.router.navigate(['/user']);
    });
  }

  cancel(): void {
    this.router.navigate(['/user']);
  }
}
