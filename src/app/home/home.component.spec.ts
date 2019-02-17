import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ApiService } from './../services/api.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiService: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ ApiService ],
      imports: [ FormsModule, NgxPaginationModule, Ng2SearchPipeModule, Ng2OrderModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    apiService = TestBed.get(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the h3 contain the headline', () => {
      const compiled = fixture.debugElement.nativeElement;
      apiService.getData().subscribe(result => {
          expect(result).toBeTruthy();
          expect(compiled.querySelector('h1').textContent).toContain(result.headline);
      });
  });

  it('should called the getData method', () => {
    spyOn(apiService, 'getData').and.callThrough();
  });
});
