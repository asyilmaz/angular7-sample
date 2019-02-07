import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/about/search/search.service';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, switchMap, filter, map, tap } from 'rxjs/operators';
import { Observable, throwError, } from 'rxjs';
import { debug } from 'util';
import { JsonConvert } from 'json2typescript';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: Observable<any[]>;
  loading: boolean;
  searchField: FormControl = new FormControl();
  constructor(private searchService: SearchService) { }

  ngOnInit() {

    this.results = this.searchField.valueChanges
      .pipe(
        filter((value: string) => value && value.length > 0),
        debounceTime(0),
        distinctUntilChanged(),
        tap(() => this.loading = true),
        switchMap(value => this.searchService.search(value)),
        map(
          result => {
            return result.suggest.employeeSuggest[0].options;
          }
        ),
        tap(() => this.loading = false)
      );
  }
}
