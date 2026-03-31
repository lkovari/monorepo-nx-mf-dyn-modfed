import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Layout } from './shared/components/layout/layout';

@Component({
  imports: [Layout, RouterModule],
  selector: 'nxmfdf-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'main-host';
}
