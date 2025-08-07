import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-reactive',
  standalone: true, // ✅ สำคัญมากสำหรับ Standalone Component
  templateUrl: './register-reactive.html',
  imports: [CommonModule, ReactiveFormsModule], // ✅ ต้องมี CommonModule สำหรับ *ngIf ด้วย
})
export class RegisterReactiveComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      // ค่าของแต่ละ field
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        repeatPassword: ['', [Validators.required]],
      },
      // validator ระดับ form เช่น cross-field validation
      {
        validators: [this.passwordMatchValidator],
      }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const repeat = form.get('repeatPassword')?.value;
    return password === repeat ? null : { passwordMismatch: true };
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}