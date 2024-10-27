export interface Country {
  order: number
  id: string
  name: string
  flag: string
  capital: string
  language: string
  continent: string
  sports: Sport[]
  comment: CommentState
}

export interface Sport {
  sport: string
  medals: Medals
}

export interface Medals {
  gold: number
  silver: number
  bronze: number
}

export interface CommentState {
  comments: string[];
  comment: string;
}
