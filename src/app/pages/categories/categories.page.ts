import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(private categoryService : CategoryService) 
  { 

  }

  categories : Category [] =[];

  ngOnInit() 
  {
    this.categoryService.getAllCategory().subscribe(res => {
      this.categories = res;
    });
  }

}
