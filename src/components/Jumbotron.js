class Jumbotron extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron bg-light">
            <h1 class="display-4">Masak Apa Ya</h1>
            <p class="lead">Aplikasi daftar masakan untuk referensi masak anda jika memang sudah bingung mau masak apa.
            </p>
            <hr class="my-4">
            <a class="btn btn-primary" href="#" role="button">Pelajari Selengkapnya</a>
        </div>
        `
    }

}

customElements.define('jumbotron-element', Jumbotron);