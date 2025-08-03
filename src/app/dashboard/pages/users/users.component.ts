import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UsersService } from '@services/users.services';
import { TitleComponent } from '@shared/title/title.component';


@Component({
  selector: 'app-users',
  imports: [CommonModule, TitleComponent,RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {

  public usersService = inject( UsersService)


 }
