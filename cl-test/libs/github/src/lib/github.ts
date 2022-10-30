interface GithubCommitsInterface {
  sha?: string;
  node_id?: string;
  commit: CommitInterface;
  url?: string;
  html_url:string;
  comments_url: string;
  author: AuthorGithubInterface;
  committer: AuthorGithubInterface;
  parents: CommitTreeInterface[];
}
interface AuthorGithubInterface {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
interface CommitInterface {
author: AuthorCommitInterface;
committer: AuthorCommitInterface;
message: string;
tree: CommitTreeInterface;
url: string;
comment_count: number;
verification: VerificationCommitInterface;
}
interface AuthorCommitInterface {
  name: string;
  email: string;
  date: string;
}
interface CommitTreeInterface {
  sha:string;
  url:string;
  html_url?:string;
}
interface VerificationCommitInterface{
  verified: boolean;
  reason: string;
  signature: string;
  payload: string;
}
export {
  GithubCommitsInterface
}
