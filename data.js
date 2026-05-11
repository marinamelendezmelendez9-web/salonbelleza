const servicios = [

    {
        imagen:"corte.jpg",
        titulo:"Corte de Cabello",
        descripcion:"Estilos modernos que realzan tu personalidad."
    },

    {
        imagen:"manicura.jpg",
        titulo:"Manicure & Pedicure",
        descripcion:"Cuidado y belleza para tus manos y pies."
    },

    {
        imagen:"curso-de-maquillaje-profesional.jpg",
        titulo:"Maquillaje Profesional",
        descripcion:"Resalta tu belleza para cualquier ocasión especial."
    }

];

const contenedor = document.querySelector(".grid-content");

servicios.forEach(servicio => {

    contenedor.innerHTML += `

    <div class="card">

        <img src="${servicio.imagen}" alt="${servicio.titulo}">

        <h3>${servicio.titulo}</h3>

        <p>${servicio.descripcion}</p>

    </div>

    `;
});
