import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import {Container, Typography } from '@material-ui/core/'
import 'fontsource-roboto';
import './App.css';
import {ValidarCPF, ValidarSenha} from './models/cadastro.js'

function EnviarForm(dados){
  console.log(dados)
}



function App() {
  return (
    <Container component="article" maxWidth="md">
      <Typography variant='h4'align="center" component='h1'>
        Formulario de Cadastro
      </Typography>
   
      <FormularioCadastro aoEnviar={EnviarForm} validacoes={{cpf: ValidarCPF, senha: ValidarSenha}}/>
    </Container>
  );
}



export default App;
