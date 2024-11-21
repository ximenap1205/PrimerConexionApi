document.addEventListener('DOMContentLoaded', () => {
    // URL de la API para obtener datos de los estados
    const apiUrl = 'https://api.covidtracking.com/v1/states/current.json';

    // Función para obtener los datos de los estados
    const fetchCovidData = async () => {
        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                displayCovidData(data);
            } else {
                console.error('Error al obtener los datos de la API');
            }
        } catch (error) {
            console.error('Error en la conexión a la API:', error);
        }
    };

    const displayCovidData = (data) => {
        const stateList = document.getElementById('state-list');
        stateList.innerHTML = '';

        data.forEach(state => {
            const li = document.createElement('li');
            li.textContent = `${state.state}: Casos confirmados: ${state.positive} | Muertes: ${state.death}`;
            stateList.appendChild(li);
        });
    };

    fetchCovidData();
});
