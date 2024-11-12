export class PaginationQueryDto {
  page: number = 1;
  pageSize: number = 10;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc' = 'asc';
  search?: string;

  constructor(
    page: number = 1,
    pageSize: number = 10,
    sortBy?: string,
    sortOrder: 'asc' | 'desc' = 'asc',
    search?: string,
  ) {
    if (pageSize > 1000) {
      pageSize = 1000;
    }
    this.page = page;
    this.pageSize = pageSize;
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
    this.search = search;
  }
}
