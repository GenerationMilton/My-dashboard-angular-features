import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';
import { TitleComponent } from '@shared/title/title.component';



@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, SidemenuComponent, TitleComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent { }
