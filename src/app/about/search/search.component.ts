import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/about/search/search.service';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, switchMap, filter, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: any[];
  searchField: FormControl = new FormControl();
  constructor(private searchService: SearchService) { }

  ngOnInit() {

    this.searchField.valueChanges
      .pipe(
        filter((value: string) => value && value.length > 2),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(value => this.searchService.search(value))
        ).subscribe();
  }
}
