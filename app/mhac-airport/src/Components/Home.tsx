import { WalletMultiButton } from "@solana/wallet-adapter-material-ui"
import React,  {useState} from "react"
import { Typography, AppBar, Container, Paper, Button, Grid, Box, CssBaseline, Toolbar, Link } from "@mui/material"
import CustomizedTables from './CustomizedTables'

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Mile High Ape Club
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Home = () => {
    const [state, setState] = useState('start')

    return (
        <>
        <Grid  id="whole-app"  style={{ position: "relative", height: "80vh" }}>
            <CssBaseline />
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
                style={{ height: "inherit", marginTop: 40}}
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
                            <Button 
                                size="large" 
                                variant="contained"
                                onClick={() => {
                                    setState('show-table')
                                }}
                                >Take Flight
                            </Button>
                        </Grid>
                        {state === 'start' && (
                            <Grid item xs={12}>
                                    {/* <img src={tiers}></img> */}
                                    <Paper elevation={3} variant="outlined"> 
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        
                                    </Paper>
                            </Grid>
                        )}
                        {state === 'show-table' && (
                            <Grid item xs={12}>                                     
                                <CustomizedTables></CustomizedTables>
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
