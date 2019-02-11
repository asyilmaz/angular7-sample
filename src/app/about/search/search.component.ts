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

  results$: Observable<any[]>;
  isFound: boolean = false;
  searchField: FormControl = new FormControl();
  constructor(private searchService: SearchService) { }

  ngOnInit() {

    this.results$ = this.searchField.valueChanges
      .pipe(
        //filter((value: string) => value && value.length > 0),
        debounceTime(0),
        distinctUntilChanged(),
        switchMap(value => this.searchService.search(value)),
        map(
          result => {
            if (result != null && result.suggest != null && result.suggest.employeeSuggest != null &&
              result.suggest.employeeSuggest[0].options != null && result.suggest.employeeSuggest[0].options.length > 0) {
              return result.suggest.employeeSuggest[0].options;
            } else {
              new Observable<any[]>();
            }

          }
        )
      );


  }
}
