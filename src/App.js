import { useEffect, useState } from 'react';
import '../src/styles/global.scss';
import { Header } from './components/Header';
import { Repository } from './components/Repository';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/guirecordon/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  console.log(repositories);

  return (
    <>
      <Header />
      {repositories.map((repository) => (
        <Repository key={repository.name} {...repository} />
      ))}
    </>
  );
}

export default App;
