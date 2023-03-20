import React from 'react';
import './styles.scss';

interface RepositoryProps {
  name: string
  description: string
  html_url: string
}

export function Repository({ name, html_url, description }: RepositoryProps) {
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
