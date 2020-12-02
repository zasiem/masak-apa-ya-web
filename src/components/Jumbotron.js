class Jumbotron extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron bg-secondary rounded-0 text-white">
            <h1 class="display-4">Masak Apa Ya</h1>
            <p class="lead">Aplikasi daftar masakan untuk referensi masak anda jika memang sudah bingung mau masak apa.
            </p>
        </div>
        `
    }

}

customElements.define('jumbotron-element', Jumbotron);