import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejoComponent } from './consejo.component';

describe('ConsejoComponent', () => {
  let component: ConsejoComponent;
  let fixture: ComponentFixture<ConsejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsejoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
