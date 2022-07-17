/* eslint-disable linebreak-style */
class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            .hero {
                margin: 0;
                display: flex;
                align-items: center;
                text-align: center;
                top: 67px;
                width: 100%;
                min-height: 380px;
                background-image: url("./images/hero-image_4-small.jpg");
                background-position: center;
                background-color: rgb(83, 172, 210);
            }
            
            .hero__inner {
                margin: 0 auto;
                max-width: 800px;
                flex-direction: row;
            }
            
            .hero__title {
                color: #fff;
                font-weight: 500;
                font-size: 36px;
            }
            
            .hero__tagline {
                color: #fff;
                margin-top: 16px;
                font-size: 18px;
                font-weight: 300;
                text-decoration: none;
                cursor: pointer;
                background-color: rgb(213, 185, 114, 0.5);
                padding: 16px 24px;
                border-radius: 9px;
            }
            @media screen and (min-width: 600px) and (max-width: 800px) {
                .hero {
                    margin: 0px 0px 0px 0px;
                    width: 100%;
                    padding: 0px 16px;
                    align-item: center;
                    background-image: url("./images/hero-image_4-medium.jpg");
                }
            }
            @media screen and (min-width: 801px) and (max-width: 1200px) {
                .hero {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    background-image: url("./images/hero-image_4-medium.jpg");
                }
            }
            @media screen and (min-width: 1201px) {
                .hero {
                    margin-left: 36px;
                    padding: 0;
                    width: 100%;
                    border-radius: 16px;
                    background-image: url("./images/hero-image_4-large.jpg");
                }
            }
        </style>
        <picture>
            <source srcset="./images/hero-image_4-large.jpg" media="(max-width: 1700px)">
            <div class="hero" id="main-content">
                <div class="hero__inner">
                    <h1 class="hero__title"><b>Find Your Taste Style</b></h1>
                    <a href="#exploreto" class="hero__tagline">Explore to ...</a>
                </div>
            </div>
        </picture>
        `;
  }
}

// eslint-disable-next-line linebreak-style
customElements.define('hero-title', Jumbotron);
