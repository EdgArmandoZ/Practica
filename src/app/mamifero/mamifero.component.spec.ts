import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamiferoComponent } from './mamifero.component';

describe('MamiferoComponent', () => {
  let component: MamiferoComponent;
  let fixture: ComponentFixture<MamiferoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MamiferoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MamiferoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
