    class Router {
    constructor(routes) {
        this.routes = routes;
        this.root = document.getElementById('app');

        window.addEventListener('popstate', () => {
            this.loadRoute(window.location.pathname);
        });

        this.loadRoute(window.location.pathname);
    }

    go(path) {
        history.pushState({}, '', path);
        this.loadRoute(path);
    }

    loadRoute(path) {
        const component = this.routes[path];
        if (component) {
            this.root.innerHTML = `<${component}></${component}>`;
        } else {
            this.root.innerHTML = `<h2>404 - Página no encontrada</h2>`;
        }
    }
}
