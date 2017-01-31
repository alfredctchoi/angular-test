export class Page {
  page: string;
  perPage: number;
  total: number;
  totalPages: number;

  constructor(data){
    this.page = data.page;
    this.perPage = data.per_page;
    this.total = data.total;
    this.totalPages = data.total_pages;
  }
}
