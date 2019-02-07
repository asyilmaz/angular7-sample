import { Injectable } from '@angular/core';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchRequest } from 'src/app/about/search/searchrequest';
import { JsonConvert, JsonConverter } from 'json2typescript';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl: string = 'http://localhost:9200/employee/_search';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  search(keyword: string): Observable<any> {

    let searchinput = new SearchRequest(keyword);
    let httpOptions = ({
      headers: this.headers
    });
    return this.httpClient.post(this.baseUrl, JSON.stringify(searchinput), httpOptions)
      .pipe(
        map(
          (response) => {return response;}
        )
      );

  }


}
