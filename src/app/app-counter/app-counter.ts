import { Component, signal, computed, effect} from '@angular/core';

@Component({
  selector: 'app-app-counter',
  standalone: true,
  imports: [],
  templateUrl: './app-counter.html',
  styleUrls: ['./app-counter.scss']
})
export class AppCounterComponent {
  count = signal(0);
  double = computed(() => this.count() * 2);

  constructor() {
    if (typeof window !== 'undefined') {
      effect(() => {
        console.log('Count changed:', this.count());
      });
    }
  }

  increase() {
    console.log('increase clicked');
    this.count.update(n => n + 1);
  }

  decrease() {
    console.log('decrease clicked');
    this.count.update(n => n - 1);
  }

  reset() {
    console.log('reset clicked');
    this.count.set(0);
  }
}