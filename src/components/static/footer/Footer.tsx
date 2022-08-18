import React from "react";
import {Grid, Box, Typography,} from '@mui/material';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensRedecer";


function Footer(){

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens    
    );

    var footerComponent;

    if(token != ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className="box1">
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className="text-color">Siga-me nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/DevDaniel47" target="_blank">
                        <GitHubIcon className="icon-css"/>
                    </a>
                    <a href="https://www.instagram.com/devdaniel47/" target="_blank">
                        <InstagramIcon className="icon-css"/>
                    </a>
                    <a href="https://www.linkedin.com/in/DevDaniel47/" target="_blank">
                        <LinkedInIcon className="icon-css"/>
                    </a>
                </Box>
            </Box>
            <Box className="box2">
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className="text-color">Todos os direitos reservados ao Author</Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle2" gutterBottom className="text-color" align="center">Daniel Oliveira</Typography>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }


    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;