import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAddComponent } from './delete-add.component';

describe('DeleteAddComponent', () => {
  let component: DeleteAddComponent;
  let fixture: ComponentFixture<DeleteAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
