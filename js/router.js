class Router {
    /**
     * Metodo inicial.
     *
     * @param {Object} paths - Object with paths and templates
     * @return {void}.
     */
    constructor(paths) {
        this.paths = paths;
        this.initRouter();
        this.handlePopState();
    }

    /**
     * Permite inicializar el router
     *
     * @return {void}.
     */
    initRouter() {
        const { pathname } = window.location;
        const URI = pathname === "/" ? "home" : pathname.replace("/", "");
        this.load(URI, false); // No modificar el historial al cargar inicialmente
    }

    /**
     * Permite iniciar la carga de paginas.
     *
     * @param {string} page - Page to load
     * @param {boolean} pushState - Whether to push state to history
     * @return {void}.
     */
    load(page = "home", pushState = true) {
        const { paths } = this;
        const { path, template } = paths[page] || paths['home'];
        const $CONTAINER = document.querySelector("#content");
        $CONTAINER.innerHTML = template;
        if (pushState) {
            window.history.pushState({}, "", path);
        }
    }

    /**
     * Maneja el evento popstate
     *
     * @return {void}.
     */
    handlePopState() {
        window.addEventListener('popstate', (event) => {
            const pathname = window.location.pathname.replace("/", "") || "home";
            this.load(pathname, false); // No modificar el historial al cargar desde popstate
        });
    }
}