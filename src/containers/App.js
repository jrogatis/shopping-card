import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderBar from '../components/HeaderBar'
const style = {
  marginRight: 20,
};

const Main = () => (
  <div>
    <HeaderBar />
    <h2>Venda sua tranqueira aqui!</h2>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

const App = () => (

  <MuiThemeProvider>
    <Main/>
  </MuiThemeProvider>
)


export default App
