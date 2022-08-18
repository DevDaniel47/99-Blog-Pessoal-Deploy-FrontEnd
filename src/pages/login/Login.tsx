import {Grid, Box, Typography, TextField, Button, backdropClasses } from "@mui/material";
import React, { ChangeEvent, useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import {login} from "../../services/Service";
import './Login.css';
import UserLogin from "../../models/UserLogin";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
    let navigate = useNavigate ();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
           id: 0,
           usuario: '',
           senha: '',
           token: '' 
    }
    )


    function updateModel (e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token != ''){
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try{
        await login (`usuarios/logar`, userLogin, setToken)

        toast.success('Login efetuado!', {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    
    catch (error){
        toast.warn('Login inválido!', {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
}


    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                   <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color='textPrimary' component='h3' align='center' className="text">Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id="usuario" label="Email" variant="outlined" name="usuario" margin="normal" fullWidth/>
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                            <Button type="submit" variant="contained" color="primary">
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrar' className="text-decorator-none">
                        <Typography variant="subtitle1" gutterBottom align="center" className="text">Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="image-login">
            </Grid>
    </Grid>
    )
}

export default Login;