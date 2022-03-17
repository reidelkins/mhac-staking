import * as React from 'react';
import { List, ListItem, Typography, Paper } from '@mui/material';

export default function Rules() {
    return (
        <React.Fragment>
            <Paper>
                <Typography variant='h6'>How do I put my apes on the plane?</Typography>
                <List>
                    <ListItem>
                        <Typography>
                        Click on the "Boarding Apes" button above
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                        Click on each ape in the terminal that you would like to board                    
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                        Click on the arrow pointing to the right                    
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>
                            Click on move gems
                        </Typography>
                    </ListItem>
                </List>
            </Paper>
        </React.Fragment>
    );
  }