import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import {Container, Typography } from '@material-ui/core/'
import 'fontsource-roboto';
import './App.css';


function EnviarForm(dados){
  console.log(dados)
}

function ValidarCPF(cpf) {
    if(cpf.length != 11){
        return {valido: false, texto: "CPF deve ter 11 Digitos"}
    }
    else{
      return {valido: true, texto: ''}
    }
}

function App() {
  return (
    <Container component="article" maxWidth="md">
      <Typography variant='h4'align="center" component='h1'>
        Formulario de Cadastro
      </Typography>
   
      <FormularioCadastro onSubmit={EnviarForm} ValidarCPF={ValidarCPF}/>
    </Container>
  );
}



export default App;
