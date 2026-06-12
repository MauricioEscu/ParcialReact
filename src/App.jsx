import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { usePosts } from './hooks/usePosts';

// Importamos los componentes
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx"; 
import CharactersPage from "./pages/CharactersPage.jsx"; 
import CreateCharactersPage from "./pages/CreateCharactersPage.jsx";
import CharacterDetailPage from "./pages/CharacterDetailPage.jsx";
import EditCharacterPage from "./pages/EditCharacterPage.jsx";

const App = () => {
  // 1️⃣ EXTRAEMOS updateCharacter del hook (importante)
  const { characters, loading, error, removeCharacter, addCharacter, updateCharacter } = usePosts();

  return (
    <div>
      <Navbar />

      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route 
            path="/characters" 
            element={
              <CharactersPage 
                characters={characters} 
                loading={loading} 
                error={error} 
                removeCharacter={removeCharacter} 
              />
            } 
          />
          
          <Route path="/characters/nuevo" element={<CreateCharactersPage addCharacter={addCharacter} />} />
          
          <Route path="/characters/:id" element={<CharacterDetailPage characters={characters} />} />
          
          {/* 2️⃣ PASAMOS updateCharacter COMO PROP AQUÍ */}
          <Route 
            path="/characters/:id/editar" 
            element={
              <EditCharacterPage 
                characters={characters} 
                updateCharacter={updateCharacter} 
              />
            } 
          />
          
          <Route path="*" element={<div className="text-danger mt-4"><h2>404</h2></div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;