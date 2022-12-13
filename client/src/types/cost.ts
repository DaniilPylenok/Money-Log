export interface ICost {
  id: string;
  text: string;
  price: number;
  date: Date;
}

export interface CostInfo {
  id?: string,
  text?: string;
  price?: number;
  date?: Date;
}
