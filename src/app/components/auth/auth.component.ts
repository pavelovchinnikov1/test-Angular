import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  formGroup: FormGroup;
  hide = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  signIn() {
    const res = this.authService.signIn(this.formGroup.value).subscribe(() => {
      this.router.navigateByUrl('/devicesList');
    });
    console.log(res);
  }
}
