import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opener } from './opener';

describe('Opener', () => {
  let component: Opener;
  let fixture: ComponentFixture<Opener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opener],
    }).compileComponents();

    fixture = TestBed.createComponent(Opener);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
