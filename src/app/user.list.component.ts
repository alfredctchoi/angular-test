import {Component, OnInit} from '@angular/core';

import {User} from './user'
import {Page} from './page'
import {UserService} from './user.service';

@Component({
  selector: 'user-list',
  templateUrl: 'user.list.html',
  styleUrls: []
})
export class UserList implements OnInit {
  users: User[];
  userPaging: Page = null;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers({page = -1} = {}): void {
    this.userService.getUsers(page).then(userList => {
      this.users = userList.users;
      this.userPaging = userList.paging;
    });
  }

  handlePage(page): void{
    this.getUsers({page});
  }
}
