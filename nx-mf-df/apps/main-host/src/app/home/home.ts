import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularVersion } from '@nx-mf-df/common-ui-lib';

@Component({
  standalone: true,
  selector: 'nxmfdf-home',
  imports: [AngularVersion],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly versionTextStyle = {
    fontWeight: '600',
    color: 'magenta',
  };
}
