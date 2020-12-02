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
        console.log(this._data);
        if(this._data != null)
            this.innerHTML = `
            <div class="card w-75 mx-auto">
                <div class="overflow-hidden mx-auto w-100" style="height:230px">
                    <img src="${this._data.image}" class="card-img-top" alt="${this._data.name}">
                </div>
                <div class="card-body">
                    <h4 class="card-title text-center font-weight-bold">${this._data.name}</h4>
                    <table class="table table-borderless">
                        <tr>
                            <td>
                                <span class="float-left small">${this._data.category}</span>
                            </td>
                            <td>
                                <span class="float-right small">${this._data.origin}</span>
                            </td>
                        </tr>
                    </table>
                    <p class="card-text">${this._data.description.substring(0,700)}...</p>
                    <a href="#" class="btn btn-primary w-100">Detail</a>
                </div>
            </div>
            `;
        else
            this.innerHTML = `<h5 class="card-title text-center">Loading . . . </h5>`;
    }
}

customElements.define('card-recommendation', Recommendation);