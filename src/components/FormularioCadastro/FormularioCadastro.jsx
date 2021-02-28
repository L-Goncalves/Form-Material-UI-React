import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core/'
import React, {useState} from 'react';

function FormularioCadastro({onSubmit, ValidarCPF}){

    //  Var first and then function handler
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCPF] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)

    const [erros, setErros] = useState({cpf:{valido:true, texto: ""}})
    return(
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                onSubmit({nome, sobrenome, cpf, novidades, promocoes})
            }}>
                <TextField 
                value={nome}
                    onChange={(event) => {
                        setNome(event.target.value)
                    }}
                    id="nome" 
                    label="Qual o seu nome?" 
                    color="primary" 
                    autoFocus 
                    fullWidth 
                    margin="normal"/>
        

                <TextField value={sobrenome}
                            onChange={(event) => {
                 
                                setSobrenome(event.target.value)
                       
                       
                            }}
                    id="sobrenome"
                    label="Qual o seu sobrenome?" 
                    color="primary" 
                    fullWidth 
                    margin="normal"/>
                <TextField
                    value={cpf}
                    onChange={(event) => {
                        setCPF(event.target.value)
    
                        }}
                    onBlur={(event) =>{
                        const isValido = ValidarCPF(cpf)
                       
                        setErros({cpf:isValido})
                    }}
                    helperText={erros.cpf.texto}
                    id="cpf"
                    error={!erros.cpf.valido}
                    label="Digite seu CPF"
                    color="primary" 
                    fullWidth 
                    margin="normal"/>

                <FormControlLabel 
                     control={
                     <Switch onChange={(event) =>{
                        setPromocoes(event.target.checked)
                     }} name="Promoções"
                     checked={promocoes}
                     color="primary">
                     
 
                    </Switch>

                }  label="Quero Receber Promoções!"/>
               

               <FormControlLabel control={
                     <Switch
                     onChange={(event) =>{
                        setNovidades(event.target.checked)
                     }}
                     name="novidades"
                     checked={novidades}
                     color="primary">
                     
 
                    </Switch>

                }  label="Me notifique de Novidades!"/>

            


                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
            </form>
        </>
    )
}


export default FormularioCadastro;