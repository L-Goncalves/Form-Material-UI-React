import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import {Container, Typography } from '@material-ui/core/'
import 'fontsource-roboto';
import './App.css';


function App() {
  return (
    <Container component="article" maxWidth="md">
      <Typography variant='h4'align="center" component='h1'>
        Formulario de Cadastro
      </Typography>
   
      <FormularioCadastro/>
    </Container>
  );
}

export default App;
