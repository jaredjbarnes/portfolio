import { LitElement, html } from "./lit.js";
import { customElement } from "./lit_decorators.js";

@customElement("my-portfolio")
export class MyPortfolio extends LitElement {
  render() {
    return html`<div>Hello World!</div>`;
  }
}
