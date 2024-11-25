import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <section>
          <h2>Bienvenido a Nuestra Empresa</h2>
          <p>En nuestra empresa nos dedicamos a la fabricación de productos innovadores para todo tipo de industrias...</p>
          <p>Historia: Fundada en 1990, nos hemos enfocado en...</p>
          <p>Filosofía: Nuestra misión es ofrecer productos de la más alta calidad...</p>
        </section>
        
        <section>
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

        <section>
          <h3>Video de Presentación</h3>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXc"
            title="Video de presentación"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>

        <section>
          <h3>Información de Contacto</h3>
          <p><strong>Dirección:</strong> Calle Ficticia 123, Ciudad Ejemplo</p>
          <p><strong>Teléfono:</strong> +1234567890</p>
          <p><strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00</p>
          
          <h4>Ubicación en Google Maps</h4>
          <iframe
            width="100%"
            height="400"
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
