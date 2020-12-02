class Recommendation extends HTMLElement{

    constructor(){
        super();
        this._data = null;
    }

    connectedCallback(){
        this.render();
    }

    set foods(data){
        this._data = data;
        this.render();
    }

    render(){
        if(this._data != null)
            this.innerHTML = `
            <div class="card w-75 mx-auto shadow-sm">
                <div class="overflow-hidden mx-auto w-100" style="height:230px">
                    <img src="${this._data.image}" class="card-img-top" alt="${this._data.name}">
                </div>
                <div class="card-body">
                    <h2 class="card-title text-center font-weight-bold">${this._data.name}</h2>
                    <table class="table table-borderless">
                        <tr>
                            <td>
                                <span class="float-left font-weight-bold">${this._data.category}</span>
                            </td>
                            <td>
                                <span class="float-right font-weight-bold">${this._data.origin}</span>
                            </td>
                        </tr>
                    </table>
                    <p class="card-text">${this._data.description.substring(0,700)}...</p>
                    <div class="text-center">
                    <a href="${this._data.youtube}" class="btn btn-outline-danger w-50" target="_blank">Video Tutorial</a>
                    </div>
                </div>
            </div>
            `;
        else
            this.innerHTML = `<h5 class="card-title text-center">Loading . . . </h5>`;
    }
}

customElements.define('card-recommendation', Recommendation);