interface GithubCommitsInterface {
  sha?: string;
  node_id?: string;
  commit?: CommitInterface
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
}
interface VerificationCommitInterface{
  verified: boolean;
  reason: string;
  signature: any;
  payload: any;
}
export {
  GithubCommitsInterface
}
