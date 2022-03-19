import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../footer/footer.component';

import { TeamComponent } from './team.component';
import { ActivatedRoute } from '@angular/router';

const mockActivatedRoute = {
  snapshot: {
    url: [{ path: 'team' }],
  },
};

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamComponent, FooterComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
