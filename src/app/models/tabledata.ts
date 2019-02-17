export interface Tabledatalist {
  id: number;
  name: string;
  description: string;
  date: number;
}

export interface Tabledata {
  headline: string;
  tableData: Tabledatalist[];
}
