import './styles.scss';

export function Repository({ name, html_url, description }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={html_url} target="_blank" rel="noreferrer">
        Acessar repositório
      </a>
    </section>
  );
}
