import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core/'
import React from 'react';

function FormularioCadastro(){
    return(
        <>
            <form>
                <TextField id="nome" label="Qual o seu nome?"  color="secondary" autoFocus fullWidth margin="normal"/>
        

                <TextField id="sobrenome" label="Qual o seu sobrenome?" color="secondary" fullWidth margin="normal"/>
                <TextField id="cpf" label="Digite seu CPF" color="secondary" fullWidth margin="normal"/>

                <FormControlLabel control={
                     <Switch name="Promoções"
                     defaultChecked
                     color="primary">
                     
 
                    </Switch>

                }  label="Quero Receber Promoções!"/>
               

               <FormControlLabel control={
                     <Switch name="Promoções"
                     defaultChecked
                     color="primary">
                     
 
                    </Switch>

                }  label="Me notifique de Novidades!"/>

            


                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
            </form>
        </>
    )
}


export default FormularioCadastro;