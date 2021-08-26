class MyCard extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
        this.name
        this.capital
        this.population
        this.index='';
    }
    static get observedAttributes(){
        return ["name","capital","population","index"]
    }
    attributeChangedCallback(nameAtr, oldVal, newVal){
        switch (nameAtr) {
            case "name":
                this.name = newVal;
            break;
            case "capital":
                this.capital = newVal;
            break;
            case "population":
                this.population = newVal;
            break;
            case "index":
                this.index = newVal;
            break;
        }
    }
    connectedCallback(){
        this.render()
    }
    styles(){
        return `
        .card{
            background: #4183c5;
            color: white;
            padding: 5px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            height: 100%;
            box-sizing:border-box;
        }
        .card:hover{
           background:  #55a8fd;;
        }
        
        .card div{
            width: 100%;
        }
        .title:hover{
            cursor: pointer;
            color:#000;
        }
        `
    }
    template(){
        return `
        <div class="card">
            <div class="title" onclick="openModal(${this.index})">Pais: ${this.name}</div>
            <div>Capital: ${this.capital}</div>
            <div>Población: ${(this.population).toLocaleString('en').replace(/,/g,' ')}</div>
        </div>
        `
    }
    render(){
        this.shadowRoot.innerHTML = `
        <style>
            ${this.styles()}
        </style>
        ${this.template()}
        `;
    }
}

window.customElements.define('my-card',MyCard)