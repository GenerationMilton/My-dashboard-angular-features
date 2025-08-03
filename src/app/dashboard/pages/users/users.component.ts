import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersService } from '@services/users.services';


@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {

  public usersService = inject( UsersService)
 }
