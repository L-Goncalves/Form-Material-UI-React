import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import {Container, Typography } from '@material-ui/core/'
import 'fontsource-roboto';
import './App.css';
import {ValidarCPF, ValidarSenha} from './models/cadastro.js'
import ValidacoesCadastro from './contexts/validacoes-cadastro'

function EnviarForm(dados){
  console.log(dados)
}



function App() {
  return (
    <Container component="article" maxWidth="md">
      <Typography variant='h4'align="center" component='h1'>
        Formulario de Cadastro
      </Typography>
   
      <ValidacoesCadastro.Provider value={{
        cpf: ValidarCPF, 
        senha: ValidarSenha}}
        >

        <FormularioCadastro aoEnviar={EnviarForm} />
      </ValidacoesCadastro.Provider>

    </Container>
  );
}



export default App;
