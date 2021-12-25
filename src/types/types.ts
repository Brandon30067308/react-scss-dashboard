export type info = {
  name: string;
  value: string;
  rate: number;
  type: 'income' | 'order';
  date: string
}

export type revenueData = {
  name: string;
  ty: number;
  ly: number;
}

export type salesData = {
  source: 'direct' | 'affiliate' | 'e-mail' | 'other';
  revenue: number;
  value: number;
}

export type appointment = {
  title: string;
  body: string;
  timeDiff: string;
}

export type project = {
  name: string;
  startDate: Date;
  endDate: Date;
  status: 'Cancelled' | 'In progress' | 'Finished';
  assignee: string;
}