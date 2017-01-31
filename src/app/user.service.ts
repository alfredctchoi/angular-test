import {Injectable}    from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {UserList} from './user.list';

@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  getUsers(page: number): Promise<UserList> {
    const pageString = page === -1 ? '' : `?page=${page}`;
    return this.http.get(`https://reqres.in/api/users${pageString}`)
      .toPromise()
      .then(response => new UserList(response.json()))
      .catch(err => console.error('An error has occurred: ', err))
  }
}
