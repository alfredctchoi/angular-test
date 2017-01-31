import {Page} from './page'
import {User} from './user'


export class UserList {
  paging: Page;
  users: User[];

  constructor(response) {
    const {
      page,
      per_page: perPage,
      total,
      total_pages: totalPages
    } = response;

    this.paging = {
      page,
      perPage,
      total,
      totalPages
    };

    this.users = response.data.map(user => ({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      avatar: user.avatar
    }));
  }
}

