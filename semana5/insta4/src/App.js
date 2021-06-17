import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'The Wolfs'}
          fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HOQP6bTg0T6E9eqARYFMRmlZh2yXvexKcwYrKaKdRb5pOOH4YP_6kkspin-S02F6p_k&usqp=CAU'}
          fotoPost={'https://i1.sndcdn.com/artworks-mXJvzGRvojhvzEVy-xnfR2A-t500x500.jpg'}
        />

        <Post
           nomeUsuario={'Elon Musk'}
           fotoUsuario={'https://exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg'}
           fotoPost ={'https://www.cimentoitambe.com.br/wp-content/uploads/2021/03/elon-musk.jpg'} 
        />

        <Post
          nomeUsuario={'Michael Burry'}
          fotoUsuario={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPmvJ4dIL3WobyssxwAN-gnRmsYiOiv1A43WHCZ-9cnSuSB4SRhXrCjWZNDpZLA6zyHg&usqp=CAU'}
          fotoPost ={'https://media.vanityfair.com/photos/54cbfe495e7a91c528235bb1/master/w_2560%2Cc_limit/image.jpg'}
        />

      </MainContainer>
    );
  }
}

export default App;
