class AppNavBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const template = document.createElement('template');
      template.innerHTML = `
        <link rel="stylesheet" href="./css/navbar.css">
        <style>
            
        </style>
            
        <nav>
            <!--<h1>🥷 ${'gameData.userName'}</h1>-->
            <h1>🥷 ${'Usuario'}</h1>
            <label>Nivel</label>
            <select id="level" class="select">
                <option value="10000">Fácil</option>
                <option value="5000">Normal</option>
                <option value="2000">Dificil</option>
            </select>
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