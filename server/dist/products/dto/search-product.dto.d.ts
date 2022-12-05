export interface SearchProductDto {
    type: searchType;
    substring: string;
}
declare enum searchType {
    all = 0,
    sold = 1
}
export {};
