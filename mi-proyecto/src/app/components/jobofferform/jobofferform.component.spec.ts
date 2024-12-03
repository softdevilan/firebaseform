import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobofferformComponent } from './jobofferform.component';

describe('JobofferformComponent', () => {
  let component: JobofferformComponent;
  let fixture: ComponentFixture<JobofferformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobofferformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobofferformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
