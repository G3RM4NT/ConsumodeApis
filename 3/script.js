

// consultar la api de dragon ball utilizando fetch

const DOGS = async () => {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/breeds');
        if (!response.ok) throw new Error('Error al obtener los datos');
        
        const data = await response.json();
        const cardsParent = document.getElementById('cards');
console.log( data.data)
        data.data.forEach(character => {
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
      

                    <div class="p-4">
                        <h2 class="text-xl font-bold mb-2">${character.attributes.name}</h2>
                        <p class="text-gray-700">${character.attributes.description}</p>
                    </div>
                </div>  
            `;

            cardsParent.appendChild(card);
        });

    } catch (error) {
        console.error("Error:", error.message);
    }
};


const getDragonBallCharacters2 = () => {
    fetch('https://dogapi.dog/api/v2/breeds')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
};



DOGS();