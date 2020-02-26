export class ListOutcome {
  totalElementsSize: number;
  pageIndex: number;
  pageSize: number;

  constructor(totalElementsSize: number, pageIndex: number, pageSize: number) {
    this.totalElementsSize = totalElementsSize;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
  }
}
