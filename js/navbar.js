class AppNavBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
            nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            ul {
                list-style: none;
                display: flex;
            }
            
            li {
                margin-right: 1rem;
            }
        </style>
            
        <nav>
            <h1>Dev'Coffee</h1>
            <ul>
                <li onclick="ROUTER.load('home')">Home</li>
                <li onclick="ROUTER.load('game')">GAME</li>
            </ul>
        </nav>
      `;
  
      this.shadowRoot.appendChild(template.content);
  
    //   this.button = this.shadowRoot.querySelector('button');
    //   this.button.addEventListener('click', () => {
    //     console.log('Button clicked!');
    //   });
    }
  }
  
  customElements.define('app-nav-bar', AppNavBar);