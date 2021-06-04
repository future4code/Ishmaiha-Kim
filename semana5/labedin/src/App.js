import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://www.pngjoy.com/pngm/880/21034553_elon-musk-sticker-other-elon-musk-joint-beuh.png" 
          nome="Ishmaiha Kim" 
          descricao="Oi, me chamo Ishmaiha e sou aluno de full-stack da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/124/124582.png"
          nome="Email:"
          texto="MarteLaVouEu@gmail.com"
        />
      
        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/128/3228/3228219.png"
          nome="Rua:"
          texto="Rua Falcon 9, Vale do Silício"
        />
    

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.pikpng.com/pngl/b/279-2790082_elonlol-discord-emoji-elon-musk-and-pewdiepie-clipart.png" 
          nome="Ishmaiha Kim" 
          descricao="Inflacionei o dogecoin porque gosto de cachorros e memes
          " 
        />
        
        <CardGrande 
          imagem="https://www.spacex.com/static/images/share.jpg" 
          nome="SpaceX" 
          descricao="Ficava com tédio imaginando o futuro." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
