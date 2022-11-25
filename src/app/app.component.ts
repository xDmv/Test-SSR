import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularUniversal10';

  constructor(
    private renderer: Renderer2,
  ) {

  }

  ngOnInit(): void {
    this.addScript().then();
  }

  public async addScript(): Promise<void> {
    const script: HTMLScriptElement = await this.renderer.createElement('script');
    script.src = 'https://cdn.shoprocket.io/loader.js';
    script.setAttribute('defer', '');
    script.async = true;
    this.renderer.appendChild(document.head, script);
  }
}
