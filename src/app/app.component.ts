import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import '@databrainhq/plugin/web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public token: string = '';
  public dashboardId: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(){
    this.token = this.activatedRoute.snapshot.paramMap.get('token') || '';
    this.dashboardId = this.activatedRoute.snapshot.paramMap.get('dashboardId') || '';
  }
}
