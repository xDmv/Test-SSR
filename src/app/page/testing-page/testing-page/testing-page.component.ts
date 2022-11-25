import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-testing-page',
  templateUrl: './testing-page.component.html',
  styleUrls: ['./testing-page.component.scss']
})
export class TestingPageComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: Document,
  ) { }

  ngOnInit(): void {
    this.addScriptCart().then();
  }


  public async addScriptCart() {
    const json =
        {
          publishable_key: 'sr_live_pk_a2986c892cdc6a5b7b14e4d2672a4c3b9a10',
          options: {
            basket_style: 'bubble',
            basket_position: 'top-right'
          },
          includes: {
            show_pop_up_adding_item_to_cart: '1',
            show_image_thumbnails: '1',
            show_select_quantity: '0',
            show_overlay_when_open: '1',
            show_cart_count: '1',
            show_cart_total: '0'
          },
          styles: {
            basket_background: '#ffffff',
            basket_color: '#0a84ff',
            basket_text_color: '#000000',
            basket_counter_background: '#0a84ff',
            basket_counter_color: '#ffffff',
            cart_background: '#ffffff',
            cart_text_color: '#444444',
            cart_button_background: '#233642',
            cart_button_color: '#ffffff',
            cart_links_text_color: '#808b97',
            cart_border_color: '#ececec'
          }
        };
    const basketButton = await this.doc.createElement('div');
    basketButton.setAttribute('data-embed', 'basket');
    basketButton.classList.add('sr-element');
    const script =  await this.doc.createElement('script');
    script.type = 'application/json';
    // script.async = true;
    script.innerHTML = JSON.stringify(json);
    this.doc.body.append(basketButton);
    basketButton.appendChild( script);
  }
}
