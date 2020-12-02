class NavBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand font-weight-bold" href="#">Masak Apa Ya</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/zasiem" target="_blank">Developer</a>
                    </li>
                </ul>
            </div>
        </nav>
        `
    }

}

customElements.define('nav-bar', NavBar);