export interface PaginatedResponseDto<T> {
    data: T[];
    meta: {
        total: number;
        page: number;
        pageSize: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
    };
}