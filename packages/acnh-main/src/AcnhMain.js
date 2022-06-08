import { LitElement, html } from 'lit-element';
import { outlet } from 'lit-element-router';

export class AcnhMain extends outlet(LitElement) {
  render() {
    return html` <slot></slot> `;
  }
}
