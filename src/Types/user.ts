export type UserProps = {
  id: string;
  avatar_url: string;
  login: string;
  followers: number;
  following: number;
  name: string;
  bio: string;
};
export type RepoProps = {
  length: any;
  id: string;
  name: string;
  node_id: string;
  description: string;
  html_url: string;
  language: string;
  forks: number;
  updated_at: string;
  stargazers_count: number;
};
