import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [RouterOutlet], // ✅ ต้องใส่ตรงนี้
  templateUrl: './blank-layout.html',
  styleUrl: './blank-layout.scss'
})
export class BlankLayoutComponent {}