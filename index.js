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
}
const main_container = document.getElementById('main_container');
App();