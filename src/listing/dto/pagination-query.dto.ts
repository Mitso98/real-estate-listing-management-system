export class PaginationQueryDto {
    page: number = 1;
    pageSize: number = 10;

    constructor(page: number = 1, pageSize: number = 10) {
        if(pageSize > 1000) {
            pageSize = 1000;
        }
        this.page = page;
        this.pageSize = pageSize;
    }
}