import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <section>
          <h2>Bienvenido a InnovaPro</h2>
          <p>En InnovaPro, nos apasiona ofrecerte lo mejor en innovación y calidad. Desde nuestros inicios, nos hemos dedicado a conectar a los consumidores con productos de alta calidad, fabricados con componentes cuidadosamente seleccionados y respaldados por los fabricantes más confiables de la industria</p>
          <div className='historia'>
            <h4>Nuestra Historia:</h4>
            <p>Nuestra Historia: Fundada en 2010, InnovaPro comenzó como un pequeño emprendimiento enfocado en facilitar la búsqueda de productos confiables. A lo largo de los años, hemos crecido junto con nuestros clientes, convirtiéndonos en un referente en el sector gracias a nuestra dedicación y compromiso con la excelencia.</p>
          </div>
          <div className='filosofia'>
            <h4>Nuestra filosofía:</h4>
            <p>Creemos en la transparencia y la calidad. Cada producto que mostramos ha sido evaluado por sus componentes y la trayectoria de sus fabricantes, asegurándonos de que puedas tomar decisiones informadas. Nos esforzamos por construir una relación de confianza con cada cliente, ofreciendo una experiencia única y personalizada.
              Explora nuestra plataforma y descubre la gama de productos que hemos seleccionado cuidadosamente para ti.</p>
          </div>
        </section>

        <section className='imagenes'>
          <h3>Imágenes Representativas</h3>
          <div className="row">
            <div className="col-md-4">
              <img src="/assets/images/store.jpg" alt="Nuestra tienda" className="img-fluid" />
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXc" target="_blank" className="btn btn-link">Ver video</a>
            </div>
            <div className="col-md-4">
              <img src="/assets/images/factory.jpg" alt="Nuestra fábrica" className="img-fluid" />
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXc" target="_blank" className="btn btn-link">Ver video</a>
            </div>
          </div>
        </section>
        
        <section className='presentacion'>
          <h3>Video de Presentación</h3>
          <iframe
            width="50%"
            height="250"
            src="https://www.youtube.com/embed/dQw4w9WgXc"
            title="Video de presentación"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>

        <section className='contacto'>
          <h3>Información de Contacto</h3>
          <p><strong>Dirección:</strong> Calle Ficticia 123, Ciudad Ejemplo</p>
          <p><strong>Teléfono:</strong> +1234567890</p>
          <p><strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00</p>
          <h4>Ubicación en Google Maps</h4>
          <iframe
            width="100%"
            height="200"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0286496702655!2d-122.0838515854879!3d37.42199977982507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb722a01aab71%3A0xcbbf3d0b9b0b8b4a!2sGoogleplex!5e0!3m2!1ses-419!2sus!4v1636031087731!5m2!1ses-419!2sus"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
