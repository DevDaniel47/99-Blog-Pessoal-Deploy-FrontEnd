import React, { ChangeEvent, useEffect, useState } from "react";
import "./CadastroUsuario.css";
import Container from '@mui/material/Container'
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { toast } from "react-toastify";


function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto:''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto:''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate('/login')
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha ) {
            try {
                await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Cadastro efetuado!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

            } catch (error) {
                console.log(`Error: ${error}`)
                toast.warn('Usuário existente!', {
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
        
        else {
            toast.warn('Por favor verifique os dados', {
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

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className="image-cadastrar"></Grid>
            <Grid item xs={6} alignItems="center">
                <Box>
                    <form onSubmit={onSubmit} >

                        <Typography variant="h3" gutterBottom color='textPrimary' component='h3' align='center' className="text-cadastrar">Cadastro</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Email" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="Confirme a Senha" variant="outlined" name="confirmarSenha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/Login' className="text-decorator-none">
                                <Button variant="contained" color="secondary" className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" variant="contained" color="primary">
                                    Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>

            </Grid>
        </Grid>
    )
}

export default CadastroUsuario;