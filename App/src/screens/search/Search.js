import React, { useState } from 'react';

const StudioSearch = ({ studios }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudios, setFilteredStudios] = useState(studios);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredStudios = studios.filter((studio) =>
      studio.name.toLowerCase().includes(searchTerm)
    );
    setFilteredStudios(filteredStudios);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search studios..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredStudios.map((studio) => (
          <li key={studio.id}>{studio.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudioSearch;

//Neste código, temos o componente StudioSearch que recebe uma lista de estúdios como propriedade. Ele usa o hook useState para gerenciar o termo de busca (searchTerm) e a lista filtrada de estúdios (filteredStudios).

//A função handleSearch é acionada sempre que o valor do campo de entrada muda. Ela atualiza o estado searchTerm e filtra os estúdios com base no termo de busca usando o método filter. Os estúdios filtrados são então armazenados no estado filteredStudios.

//No JSX, renderizamos um campo de entrada para o usuário inserir sua consulta de busca. O valor do campo de entrada está vinculado ao estado searchTerm, e o evento onChange chama a função handleSearch.

//Abaixo do campo de entrada, renderizamos uma lista de estúdios com base no estado filteredStudios. Percorremos o array filteredStudios e renderizamos um item de lista para cada estúdio.