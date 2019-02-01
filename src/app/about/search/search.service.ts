import { Injectable } from '@angular/core';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchInput } from 'src/app/about/search/searchinput';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl: string = 'http://localhost:9100/employee/_search';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }
  constructor(private httpClient: HttpClient) { }

  search(keyword: string): Observable<any> {
    debugger;
    let searchinput = new SearchInput(keyword);
    return this.httpClient.post(this.baseUrl, searchinput.getRequestBody(), this.httpOptions)
      .pipe(
        map(searchResult => {
          console.log(searchResult);
        })
      );
  }


}
