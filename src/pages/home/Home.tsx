import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import './Home.css';
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import ModalPostagens from "../../components/postagens/modalPostagens/ModalPostagens";
import ModalTemas from "../../components/temas/modalTemas/ModalTemas";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensRedecer";

function Home(){

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens    
    );

    return(
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button><ModalTemas/></Button>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button><ModalPostagens/></Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;