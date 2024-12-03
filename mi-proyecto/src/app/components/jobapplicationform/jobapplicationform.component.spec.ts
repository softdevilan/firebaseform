import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobapplicationformComponent } from './jobapplicationform.component';

describe('JobapplicationformComponent', () => {
  let component: JobapplicationformComponent;
  let fixture: ComponentFixture<JobapplicationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobapplicationformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobapplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
