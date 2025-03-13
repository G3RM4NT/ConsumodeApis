
const consultar = async () =>{
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) throw new Error('Error al obtener los datos');
        
        const data = await response.json();
        const cardsParent = document.getElementById('cards');
    console.log( data.results)
       data.results.forEach(german => {
            const card = document.createElement('div');
            card.innerHTML = `
                <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="${german.image}" alt="${german.name}" class="w-32 aspect-square object-cover">
    
                    <div class="p-4">
                        <h2 class="text-xl font-bold mb-2">${german.name}</h2>
                        <p class="text-gray-700">${german.status}</p>
                         <p class="text-gray-700">${german.species}</p>
                               <p class="text-gray-700">${german.gender}</p>
                    </div>
                </div>  
            `;
    
            cardsParent.appendChild(card);
        });
    
    } catch (error) {
        console.error("Error:", error.message);
    }
}


consultar();
