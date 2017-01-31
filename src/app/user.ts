export class User {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;

  constructor(rawUser) {
    this.id = rawUser.id;
    this.firstName = rawUser.first_name;
    this.lastName = rawUser.last_name;
    this.avatar = rawUser.avatar;
  }
}

