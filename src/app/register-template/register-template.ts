import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-template',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-template.html'
})
export class RegisterTemplateComponent {
  onSubmit(form: NgForm) {
    console.log('Form Submitted:', form.value);
  }
}