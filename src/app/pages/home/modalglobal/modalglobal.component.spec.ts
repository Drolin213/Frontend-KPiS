import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalglobalComponent } from './modalglobal.component';

describe('ModalglobalComponent', () => {
  let component: ModalglobalComponent;
  let fixture: ComponentFixture<ModalglobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalglobalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
