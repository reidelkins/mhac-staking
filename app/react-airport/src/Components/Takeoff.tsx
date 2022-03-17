import { WalletNotConnectedError, SignerWalletAdapter } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { initGemFarm } from '../common/gem-farm';
import { PublicKey } from '@solana/web3.js';
import React, { FC, useCallback, useState, useEffect } from 'react';
import { Button, Typography, Box, Paper } from '@mui/material';
import { findFarmerPDA, stringifyPKsAndBNs } from '@reidelkins/mhac-staking';

export const Takeoff: FC = () => {
    const { publicKey, wallet, signTransaction } = useWallet();
    const { connection } = useConnection();

    // // Farmer Details
    // // const [farmData, setFarmData] = useState([
    // //   {id: "ProgramID", value: "HfV8T9hnGYNe78tGYu4QGe4E95Z6RZ1hDo9HkP6h3on"},
    // //   {id: "farmAcc", value: null},
    // // ]);
    const farm = "6JMtpk6dQ2bjUf1srU8Gr2Lmd2kvGfcBQTVqZwuKArsR";
    const [farmAcc, setFarmAcc] = useState()
    // gem farm
    let gf: any;

    // Get IDLs manually
    const [idlData,setIdlData]=useState([]);
    const getData=()=>{
      fetch('gem_farm.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          setIdlData(myJson)
        });
    }


    const [farmerIdentity, setFarmerIdentity] = useState(String());
    const [farmerAcc, setFarmerAcc] = useState();
    const [farmerState, setFarmerState] = useState(String());


    // const [avaliable, setAvaliable] = useState (
    //   {
    //     "A": String(), 
    //     "B": String()
    //   }, 
    // );

    // Update whenever wallet or connection changes
    useEffect(() => {
          freshStart()
      
          return () => {
              // Optional; clean up when `count` changed
          };
      }, [publicKey, connection, farm]);

    const freshStart = async () => {
      console.log(`Cluster: ${connection}`)
      console.log(`Wallet: ${wallet}`)
      if (connection && wallet && publicKey) {
        // Failing here.  Can't read in JSON idls
        gf = await initGemFarm(connection, undefined);
        setFarmerIdentity(publicKey.toBase58());
        console.log(gf)

        //reset stuff
        // setFarmAcc(undefined);
  
        // farmAcc.value = undefined;
        // farmerAcc.value = undefined;
        // farmerState.value = undefined;
        // availableA.value = undefined;
        // availableB.value = undefined;

        try {
          await fetchFarm();
          // await fetchFarmer();
        } catch (e) {
          console.log(`Plane ${farm} not found`);
        }
      }
    };
    
    const fetchFarm = async () => {
      console.log('fetching farm')
      let farmAccValue = await gf.fetchFarmAcc(new PublicKey(farm));
      setFarmAcc(farmAccValue)
      console.log(`farm found at ${farm}:`, stringifyPKsAndBNs(farmAccValue));
    };

    const initFarmer = async () => {
      if (!publicKey) throw new WalletNotConnectedError();

      setFarmerIdentity(publicKey.toString())
      
    };

    // const fetchFarmer = async () => {
    //   if (!publicKey) throw new WalletNotConnectedError();

    //   const [farmerPDA] = await findFarmerPDA(
    //     new PublicKey(farm), publicKey!
    //   );
    //   setFarmerIdentity(publicKey.toString())
    //   setFarmerAcc(farmerPDA);
    //   farmerState.value = gf.parseFarmerState(farmerAcc.value);
    //   await updateAvailableRewards();
    //   //console.log(`farmer found at ${farmerIdentity.value}:`, stringifyPKsAndBNs(farmerAcc.value));
    // };



    return (
        <Box>
          <Button variant='contained' onClick={initFarmer} disabled={!publicKey}>
              Init Farmer
          </Button>
          <Paper>
            <Typography variant='h5'>
              Farm ID is {farm}
            </Typography>
            <Typography variant='h5'>
              Your wallet is {farmerIdentity}
            </Typography>
          </Paper>
          <Button variant='contained' onClick={getData} disabled={!publicKey}>
              Connect to Farm
          </Button>
          <Paper>
            <Typography variant='h5'>
              Gem Farm IDL
            </Typography>
            {
              idlData && idlData.length>0 && idlData.map((item)=><p>{item}</p>)
            }
          </Paper>
        </Box>
    );
};