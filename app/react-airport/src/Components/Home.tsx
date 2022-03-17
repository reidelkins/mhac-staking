import { WalletMultiButton } from "@solana/wallet-adapter-material-ui"
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React,  {useState} from "react"
import { Typography, AppBar, Container, Paper, Button, Grid, Box, CssBaseline, Toolbar, Link } from "@mui/material"
import {Takeoff} from "./Takeoff";
import Rules from "./Rules";
import Copyright from "./Copyright";


const Home = () => {
    const [state, setState] = useState('start')
    const { connection } = useConnection();
    const { publicKey } = useWallet();



    return (
        <>
        <CssBaseline />
        <Grid  id="whole-app"  style={{ position: "relative", height: "80vh" }}>
            <Grid 
                id="appbar"
                style={{ position: "sticky", top: 0, left: 0, right: 0 }}
                >
                <AppBar style={{background: 'transparent'}}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Ape Icon Here
                        </Typography>
                        <a href="https://magiceden.io/marketplace/mile_high_ape_club"  target="_blank">
                            <Typography variant="h6" marginLeft={4} marginRight={4}> 
                                Store
                            </Typography>
                        </a>
                        <a href="https://moonrank.app/collection/mile_high_ape_club" target="_blank">
                            <Typography variant="h6" marginLeft={4} marginRight={4}> 
                                Rarity
                            </Typography>
                        </a>
                        <WalletMultiButton></WalletMultiButton>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid
                id="main"
                container
                justifyContent="center"
                style={{ height: "inherit"}}
            >
            <main>
                <div>
                    <Grid container spacing={6} justifyContent="center">
                        <Grid item>
                            <Button 
                                size="large" 
                                variant="contained"
                                onClick={() => {
                                    setState('start')
                                }}
                                >How to Stake
                            </Button>
                        </Grid>
                        <Grid item>
                            <WalletMultiButton 
                                size="large" 
                                variant="contained"
                                onClick={() => {
                                    setState('show-table')
                                }}
                                >Take Flight
                            </WalletMultiButton>
                        </Grid>
                        {state === 'start' && (
                            <Grid item xs={12}>
                                    {/* <img src={tiers}></img> */}
                                    <Rules></Rules>
                            </Grid>
                        )}
                        {state === 'show-table' && (
                            <Grid item xs={12}>                                     
                                <Takeoff></Takeoff>
                            </Grid>
                        )}
                    </Grid>                            
                </div>

            </main>
            <Box sx={{ p: 2 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </Grid>
    </Grid>

</>

    );
}

export default Home;
