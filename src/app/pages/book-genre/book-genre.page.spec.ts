import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookGenrePage } from './book-genre.page';

describe('BookGenrePage', () => {
  let component: BookGenrePage;
  let fixture: ComponentFixture<BookGenrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGenrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookGenrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
