import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtareasComponent } from './listtareas.component';

describe('ListtareasComponent', () => {
  let component: ListtareasComponent;
  let fixture: ComponentFixture<ListtareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
