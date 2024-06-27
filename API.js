// API: https://dog.ceo/dog-api/documentation/breed

const imagemPorPagina = 3;
let paginaAtual = 1
const memoria = {};

function mostrarPagina(pagina) {
   if(!memoria[pagina]) {
      const inicio = (pagina - 1) * imagemPorPagina;
      const final = inicio + imagemPorPagina; 
      const imagens = randomImage.slice(inicio, final);
   }

   const dogContainer = document.getElementById('dogs-container');
    dogContainer.innerHTML = '';
    memoria[pagina].forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        dogContainer.appendChild(img);
    });

    document.getElementById('paginaAtual').innerText = `Página ${pagina}`;
    document.getElementById('volta').disabled = pagina === 1;
    document.getElementById('proxima').disabled = pagina * imagemPorPagina >= randomImage.length;
}

document.getElementById('volta').addEventListener('click', () => {
   if (paginaAtual > 1) {
       paginaAtual--;
       showPage(paginaAtual);
   }
});
document.getElementById('proxima').addEventListener('click', () => {
   if (paginaAtual * imagemPorPagina < randomImage.length) {
       paginaAtual++;
       showPage(paginaAtual);
   }
});
showPage(paginaAtual); 

async function animais() {
   const baseURL = "https://dog.ceo/api/breed/hound" 
   const final =`${baseURL}/images/random/3`
   const response =  await fetch(final)
   const message = await response.json();
   //return message.message; 
   const fotoHTML = `<img src="${message.message[0]}" alt"image" height="250" width="250" style="margin: 10px;">
                     <img src="${message.message[1]}" alt"image" height="250" width="250" style="margin: 10px;">
                     <img src="${message.message[2]}" alt"image" height="250" width="250" style="margin: 10px;">`

   document.getElementById("dogs-container").innerHTML = fotoHTML
   console.log(foto)
}

