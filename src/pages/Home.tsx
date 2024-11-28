import Header from '../components/Header'
import Footer from '../components/Footer';
import Style from '../components/BodyStyle.module.css'
import imgEmpresa1 from '../assets/Imagen de la empresa1.jpg'
import imgEmpresa2 from '../assets/Imagen de la empresa 2.jpg'
import imgLogo from '../assets/logoEmpresa.jpg'


const Home = () => {
  return (
    <div className={Style.bodyHome}>
      <Header />
      <img className={Style.logo} src={imgLogo} />
      <main className="container mt-5">
        <section className={Style.text}>
          <h2>Bienvenido a InnovaPro</h2>
          <p>En InnovaPro, nos apasiona ofrecerte lo mejor en innovación y calidad. Desde nuestros inicios, nos hemos dedicado a conectar a los consumidores con productos de alta calidad, fabricados con componentes cuidadosamente seleccionados y respaldados por los fabricantes más confiables de la industria</p>
          <div className='historia'>
            <h4>Nuestra Historia:</h4>
            <p>Fundada en el año 2010, InnovaPro nació con la visión de democratizar el acceso a la tecnología de alta calidad. Lo que comenzó como un pequeño emprendimiento dedicado a la fabricación de dispositivos electrónicos básicos, hoy se ha convertido en una organización global con una amplia gama de productos que abarcan desde gadgets inteligentes hasta soluciones de infraestructura tecnológica para empresas.
              A lo largo de los años, hemos adoptado los avances tecnológicos más recientes, invirtiendo en investigación y desarrollo para asegurarnos de que nuestros productos sean siempre relevantes en un mundo en constante evolución.</p>
          </div>
          <div className='filosofia'>
            <h4>Nuestra filosofía:</h4>
            <p>En el corazón de InnovaPro está nuestro compromiso con la excelencia y la sostenibilidad. Creemos que la tecnología no solo debe ser innovadora, sino también accesible y responsable. Nuestra misión es diseñar productos que inspiren, conecten y empoderen a nuestros usuarios mientras cuidamos el impacto ambiental de nuestras operaciones.
              Fomentamos la colaboración, tanto dentro de nuestra organización como con nuestros socios y clientes, porque sabemos que juntos podemos crear un futuro tecnológico más brillante y justo para todos.</p>
          </div>
        </section>

        <section className={Style.imggap}>
          <div className="row">
            <div className={Style.imagenesDelBody}>
              <img className={Style.img} src={imgEmpresa1} alt="Nuestra empresa" />
              <img className={Style.img} src={imgEmpresa2} alt="Nuestra empresa" />
            </div>
          </div>
        </section>

        <section className={Style.styleVideo}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Ycs7gq_fRcA?si=VIZoU1fAQqKchF9G&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </section>

        <section className={Style.fuente}>
          <h4 className="d-flex justify-content-center p-3">Nuestra Ubicación</h4>
          <iframe
            width="100%"
            height="300"
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
