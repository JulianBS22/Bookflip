const adverts = [
    {
      nombre: "El señor de los anillos",
      autor: "J.R.R. Tolkien",
      estado: "Nuevo",
      precio: 10 ,
      ubicación: "Madrid",
      contacto: "contacto@wallapop.com",
      addId: 1
    },
    {
      nombre: "Harry Potter y la piedra filosofal",
      autor: "J.K. Rowling",
      estado: "Usado",
      precio: 5 ,
      ubicación: "Barcelona",
      contacto: "contacto2@wallapop.com",
      addId: 2
    },
    {
      nombre: "La guerra de las galaxias",
      autor: "George Lucas",
      estado: "Nuevo",
      precio: 15 ,
      ubicación: "Sevilla",
      contacto: "contacto3@wallapop.com",
      addId: 3
    },
    {
      nombre: "El principito",
      autor: "Antoine de Saint-Exupéry",
      estado: "Usado",
      precio: 3 ,
      ubicación: "Valencia",
      contacto: "contacto4@wallapop.com",
      addId: 4
    },
  ];
  



const AdvertsPage = () => {
    return (
        <div className="AdvertsPage" >
            <ul>
            {adverts.map ( advert=>(
                <li key ={advert.addId}>{advert.nombre} - {advert.autor}</li>
            ))}
            </ul>
        </div>
    );
};

export default AdvertsPage;