import { Component } from '@angular/core';
@Component({
  selector: 'app-hello',
  standalone: true,
  templateUrl: './hello.html',
  styleUrls: ['./hello.scss']
})
export class HelloComponent {
  sayHi() {
    alert('ยินดีที่ได้รู้จักครับ!');
  }
}