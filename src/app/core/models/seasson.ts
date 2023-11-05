export interface seasonInterface {
  info: InfoSeason
  results: ResultSeason[]
}

export interface InfoSeason {
  count: number
  pages: number
  next: string
  prev: any
}

export interface ResultSeason {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}
