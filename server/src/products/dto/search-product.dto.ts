export interface SearchProductDto {
  type: searchType;
  substring: string;
}

enum searchType {
  all,
  sold,
}
