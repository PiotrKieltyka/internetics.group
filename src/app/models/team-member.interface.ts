export interface TeamMemberInterface {
  name: string;
  socialTag: string;
  socialUrl: string;
  occupation: string;
  codingFrom: string;
  bio: string;
  imageUrl: string;
  status: boolean;
  socialNumbers: {
    posts: number;
    followers: number;
    following: number;
  };
}
