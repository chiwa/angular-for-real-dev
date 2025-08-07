import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReactive } from './register-reactive';

describe('RegisterReactive', () => {
  let component: RegisterReactive;
  let fixture: ComponentFixture<RegisterReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterReactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
