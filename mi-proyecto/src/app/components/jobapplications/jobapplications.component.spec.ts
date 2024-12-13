import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobapplicationsComponent } from './jobapplications.component';

describe('JobapplicationsComponent', () => {
  let component: JobapplicationsComponent;
  let fixture: ComponentFixture<JobapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobapplicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
