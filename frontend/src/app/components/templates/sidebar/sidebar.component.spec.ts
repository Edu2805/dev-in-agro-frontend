import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${SidebarComponent.prototype.callSideNav.name} should show sideBar`, () => {
    let spySideBar = spyOn(component, 'callSideNav');
    component.callSideNav();
    expect(spySideBar).toHaveBeenCalled();
  });

  it(`#${SidebarComponent.prototype.logout.name} should logout is called`, () => {
    let spyLogout = spyOn(component, 'logout');
    component.logout();
    expect(spyLogout).toHaveBeenCalled();
  });
});
