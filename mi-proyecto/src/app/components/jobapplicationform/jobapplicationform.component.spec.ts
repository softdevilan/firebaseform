import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationFormComponent } from './jobapplicationform.component';

describe('JobapplicationformComponent', () => {
  let component: JobApplicationFormComponent;
  let fixture: ComponentFixture<JobApplicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
