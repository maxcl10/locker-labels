import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseLabelComponent } from './case-label.component';

describe('CaseLabelComponent', () => {
  let component: CaseLabelComponent;
  let fixture: ComponentFixture<CaseLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
