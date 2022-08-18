import React from "react";
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { TokenState } from "../../../store/tokens/tokensRedecer";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens    
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        navigate('/login');
    }
    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static">
        <Toolbar variant="dense">
            <Box display="flex" justifyContent="end">
                <Link to="/home" className="text-decorator-none">
                    <Box className="cursor">
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                </Link>
                <Link to="/postagens" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>
                <Link to="temas" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>
                </Link>
                <Link to="/Postagem" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            Nova-Postagem
                        </Typography>
                    </Box>
                </Link>
                <Link to="/Tema" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            Novo-Tema
                        </Typography>
                    </Box>
                </Link>
                <Box mx={1} className="cursor" onClick={goLogout} >
                    <Typography variant="h6" color="inherit">
                        Sair
                    </Typography>
                </Box>
            </Box>

        </Toolbar>
    </AppBar>
        
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;