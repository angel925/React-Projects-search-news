import PropTypes from 'prop-types'


const Noticia = ({ noticia }) => {
  //extraer los datos

  const { urlToImage, url, title, description, source } = noticia;

  const imagen = { urlToImage } ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;
  return (
    <div className="row col s6 m6 l4">
      <div className="card">
          {imagen}
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={`card-action center`}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light button btn red"
          >
            Ver Noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};

Noticia.propTypes ={
  noticia: PropTypes.object.isRequired
}


export default Noticia;
