import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent { 

  public showContent = signal(false)

  public toggleContent(){
    this.showContent.update(value => !value);
  }
}
