import {
  LitElement,
  css,
  html,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
const DEFAULT_COUNT = 0;
const STEP_AMOUNT = 1;
const MAX_NUMBER = 10;
const MIN_NUMBER = -5;

export class TallyCount extends LitElement {
  constructor() {
    super();
    this.count = DEFAULT_COUNT;
  }

  static get properties() {
    return {
      count: { type: Number },
    };
  }

  static styles = css`
    :host {
      --color-green: #f49380;
      --color-white: #fff;
      --color-dark-grey: #333d;
      --color-medium-grey: #424250;
      --color-light--grey: #8d97a7;
    }
    * {
      box-sizing: border-box;
    }
    html {
      height: 100vh;
      
    }
    body {
      margin: 0;
      background: var(--color-medium-grey);
      color: var(--color-white);
      font-family: roboto, Arial, Helvetica, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    /* header */
    .header {
      text-align: center;
    }
    .header__title {
      font-size: 3rem;
      font-weight: 900;
      color: black;
    }
    /* controls */
    .controls {
      background: black;
    }
    /* counter */
    .counter {
      background: var(--color-dark-grey);
    }
    .counter__value {
      width: 100%;
      height: 15rem;
      text-align: center;
      font-size: 6rem;
      font-weight: 900;
      background: none;
      color: var(--color-white);
      border-width: 0;
      border-bottom: 1px solid var(--color-light--grey);
    }
    .counter__actions {
      display: flex;
    }
    .counter__button {
      background: none;
      width: 50%;
      border: 0;
      color: var(--color-white);
      font-size: 3rem;
      height: 10rem;
      border-bottom: 1px solid var(--color-light--grey);
      transition: transform 0.3s;
      transform: translateY(0);
    }
    .counter__button:disabled {
      opacity: 0.2;
    }
    .counter__button:active {
      background: var(--color-medium-grey);
      transform: translateY(2%);
    }
    .counter__button_break {
      border-right: 1px solid var(--color-light--grey);
    }
   
    .footer {
      background: var(--color-dark-grey);
      color: var(--color-light--grey);
      padding: 2rem;
      font-size: 0.8rem;
      text-align: center;
    }
    .footer__link {
      color: var(--color-white);
    }
  `;

  subtractHandler() {
    if (this.count > MIN_NUMBER) {
      this.count -= STEP_AMOUNT;
    }
  }
  addHandler() {
    if (this.count < MAX_NUMBER) {
      this.count += STEP_AMOUNT;
    }
  }
  reset() {
    this.count = DEFAULT_COUNT;
  }
  render() {
    return html`
      <div class="header">
        <h1 class="header__title">Tally Count App</h1>
      </div>
      <div class="controls">
        <div class="counter">
          <input
            class="counter__value"
            type="number"
            .value=${this.count}
            disabled
          />
          <div class="counter__actions">
            <button
              class="counter__button counter__button_break"
              @click=${this.subtractHandler}
              ?disabled=${this.count <= MIN_NUMBER}
            >
              Subtract
            </button>
            <button
            class="counter__button counter__button_break"
            @click=${this.reset}
          >
            Reset
          </button>
            <button
              class="counter__button"
              @click=${this.addHandler}
              ?disabled=${this.count >= MAX_NUMBER}
            >
              Add
            </button>
          
          </div>
        </div>
      </div>
      <footer class="footer">
        Inspired by
        <a class="footer_link" href="https://tallycount.app/">Tally Count</a>.
      </footer>
    `;
  }
}

customElements.define("tally-count", TallyCount);
