export class User {
  public userId: string;
  public userName: string;
  public gender: string;
  constructor(userId: string, username: string, gender: string) {
    this.userId = userId;
    this.userName = username;
    this.gender = gender;
  }
}
