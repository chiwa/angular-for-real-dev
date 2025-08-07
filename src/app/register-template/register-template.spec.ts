import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTemplate } from './register-template';

describe('RegisterTemplate', () => {
  let component: RegisterTemplate;
  let fixture: ComponentFixture<RegisterTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
