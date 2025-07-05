import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chiled } from './chiled';

describe('Chiled', () => {
  let component: Chiled;
  let fixture: ComponentFixture<Chiled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chiled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chiled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
