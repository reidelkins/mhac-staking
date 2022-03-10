import { WalletMultiButton } from "@solana/wallet-adapter-material-ui"
import React,  {useState} from "react"
import { Typography, AppBar, Container, Paper, Button, Grid, Box, CssBaseline, Toolbar, Link } from "@mui/material"
import CustomizedTables from './CustomizedTables'

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
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
        <Container maxWidth="lg">
            <CssBaseline />
            <AppBar position="fixed">
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
            <main>
                <div>
                    <Container maxWidth="lg">
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
                                        >How to Stake
                                    </Button>
                                </Grid>
                                <Grid item xs={10}>
                                    {state === 'start' && (
                                        <Paper elevation={3} variant="outlined"> 
                                            <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                            <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                            <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                            <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                            <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                            <Typography align="center" color="textPrimary"> Staking V2</Typography>
                                        </Paper>
                                    )}
                                    {state === 'show-table' && (
                                        <CustomizedTables></CustomizedTables>
                                    )}
                                </Grid>

                            </Grid>                            

                        </div>

                    </Container>
                </div>
            </main>
            <Box sx={{ bgcolor: 'secondary.main', p: 2 }} component="footer">
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
        </Container>

        </>

    );
}

export default Home;
