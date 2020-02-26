export class ListCommand {
  pageIndex: number;
  pageSize: number;

  constructor(pageIndex: number, pageSize: number) {
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
  }
}
