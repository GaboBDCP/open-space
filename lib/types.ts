export interface Theme {
  id: string;
  title: string;
  description: string;
  author: string;
  tags?: string[];
  schedule?: string;
  votes: number;
  votedBy: string[];
}

export interface Session {
  id: string;
  themeId: string;
  participants: string[];
  notes: string;
  videoCallUrl?: string;
}

export interface Result {
  id: string;
  themeId: string;
  summary: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}