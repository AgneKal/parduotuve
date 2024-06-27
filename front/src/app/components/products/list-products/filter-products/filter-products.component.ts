import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})


export class FilterProductsComponent {
  public filter: string = '';

  @Output()
  filterChanged = new EventEmitter<String>();

  public onFilter(){
    this.filterChanged.emit(this.filter);
  }
}
