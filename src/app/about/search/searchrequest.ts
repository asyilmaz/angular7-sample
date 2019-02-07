import { JsonProperty } from 'json2typescript';

export class SearchRequest {
    suggest: Suggest;
    constructor(keyword: string) {
        this.suggest = new Suggest(keyword);
    }
}

export class Suggest {
    @JsonProperty("employee-suggest")
    employeeSuggest: EmployeeSuggest;
    constructor(keyword: string) {
        this.employeeSuggest = new EmployeeSuggest(keyword);
    }
}

export class EmployeeSuggest {
    prefix: string;
    completion: Completion = new Completion;
    constructor(keyword: string) {
        this.prefix = keyword;
    }
}

export class Completion {
    field: string;
    size: number;
    fuzzy: Fuzzy = new Fuzzy;
    constructor() {
        this.field = "suggest";
        this.size = 5;
    }
}

export class Fuzzy {
    fuzziness: number;

    constructor() {
        this.fuzziness = 0;
    }
}