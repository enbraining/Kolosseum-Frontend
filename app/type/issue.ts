export interface Issue {
  id: number;
  year: number;
  name: string;
  description: string;
}

export interface Year {
  year: number;
  isVote: boolean;
}
