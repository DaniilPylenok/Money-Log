export interface ICost {
  _id: string;
  text: string;
  price: number;
  date: Date;
}

export interface CostInfo {
  id?: string;
  text: string;
  price: number;
  date: Date | string;
}
