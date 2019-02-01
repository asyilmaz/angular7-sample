export class SearchInput {

    private field: string = "suggest";
    private size: number = 100;
    private fuzziness = 0;
    private requestBody: string;

    constructor(private keyword: string) {
    }

    getRequestBody() {
        this.requestBody = "{\"suggest\": { \"employee-suggest\" : { \"prefix\" : \"" + this.keyword + "\", \"completion\" : { \"field\" : \"" + this.field + "\", \"size\" : " + this.size + ", \"fuzzy\" : { \"fuzziness\" : " + this.fuzziness + " } } } } }";
        return this.requestBody;
    }
}
