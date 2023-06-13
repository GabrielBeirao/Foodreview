import React from 'react';
import StudioSearch from './StudioSearch';

const App = () => {
  const registeredStudios = [
    { id: 1, name: 'Studio A' },
    { id: 2, name: 'Studio B' },
    { id: 3, name: 'Studio C' },
    // Add more studios as needed
  ];

  return (
    <div>
      <h1>Registered Studios</h1>
      <StudioSearch studios={registeredStudios} />
    </div>
  );
};

export default App;

// Neste exemplo, o componente App renderiza o componente StudioSearch e passa a array studiosCadastrados como propriedade. Você pode modificar a array studiosCadastrados para incluir sua própria lista de estúdios.

//Quando você executar seu aplicativo React, verá um campo de entrada onde poderá digitar sua consulta de busca, e a lista de estúdios será atualizada dinamicamente com base no termo de busca.
