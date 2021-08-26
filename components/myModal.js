class MyModal extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:'open'})
    }


    connectedCallback(){
        this.render()
    }

    styles(){
        return `
        <style>
            .modal{
                display:none;
                position:fixed;
                height:100vh;
                width:100vw;
                background:rgba(0,0,0,.8);
                top:0;
                left:0;
                justify-content:center;
                align-items:center;
            }
            .modalContent{
                background:white;
                border-radius:10px;
                padding:10px;
                max-width: 500px;
                width:50%;
                height:auto;                
            }
        </style>
        `
    }
    template(){
        return `
        <div class="modal" id="modal">
        <div class="modalContent">
        <slot></slot>
        </div>
        </div>
        `
    }

    render(){
        this.shadowRoot.innerHTML = `${this.styles()} ${this.template()}`;
    }

    open(){
        this.shadowRoot.getElementById('modal').style.display="flex";
    }
    close(){
        this.shadowRoot.getElementById('modal').style.display="none";
    }
}

window.customElements.define('my-modal',MyModal);