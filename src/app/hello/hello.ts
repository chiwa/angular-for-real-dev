import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.html',
  styleUrls: ['./hello.scss']
})
export class HelloComponent {
  user = signal({ name: 'Pea' });
  items = signal([
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' },
  ]);
  sayHi() {
    alert('ยินดีที่ได้รู้จักครับ!');
  }
}