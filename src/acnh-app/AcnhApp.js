import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

export class AcnhApp extends ScopedElementsMixin(LitElement) {
  render() {
    return html`<h1>Hello World</h1>`;
  }
}
