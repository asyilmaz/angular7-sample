import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'comp-langselect',
  templateUrl: './langselect.component.html',
  styleUrls: ['./langselect.component.css']
})
export class LangselectComponent implements OnInit {

  private translate: TranslateService;
  public languages: Language[] = new Array<Language>();
  constructor(private _translate: TranslateService) {
    this.translate = _translate;

  }

  ngOnInit() {
    this.getLanguages();
  }

  changeLang(code: string) {
    this.translate.use(code);
  }

  getLanguages() {
    const langs: string[] = this.translate.getLangs();
    for (let lang of langs) {
      this.translate.get("NavBar.Languages." + lang)
        .subscribe(res => {
          this.languages.push(new Language(lang, res))
        });
    }
  }

}

export class Language {
  constructor(public code: string, public name: string) { }
}


