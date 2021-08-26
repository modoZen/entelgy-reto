async function App() {
    try {
        const data = await getData();
        console.log(data)
        console.log(main_container);
        main_container.innerHTML = data.map((country,index)=>`
        <my-card 
        index="${index}"
        name="${country.name}" 
        capital="${country.capital}" 
        population="${country.population}"
        ></my-card>
        `).join('');
        // main_container.innerHTML = data.map(country=>`
        // <div class="main_card">
        //     <div class="pH">Pais: ${country.name}</div>
        //     <div>Capital: ${country.capital}</div>
        //     <div>Población: ${(country.population).toLocaleString('en').replace(/,/g,' ')}</div>
        // </div>
        // `).join('');
    } catch (e) {
        console.error('Error en el App',e.message)
    }
}

async function openModal(index){
    const data = await getData();
    console.log(data[index].name);
    modal.innerHTML = `
    <div class="modelContentSlot">
        <div class="header">
            <div class="title">Region: ${data[index].region}</div>
        </div>
        <div class="body">
            <div>Bandera del país</div>
            <img class="img" src="${data[index].flag}" /></div>
        <div class="footer">
            <button onclick="closeModal()" class="button">Cerrar</button>
        </div>
    </div>
    `
    modal.open()


}

function closeModal() {
    modal.close();
}
const main_container = document.getElementById('main_container');
const modal = document.querySelector('my-modal');
App();