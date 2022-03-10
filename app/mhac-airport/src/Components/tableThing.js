import {
    createStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Theme,
    withStyles,
    WithStyles,
  } from '@mui/material';
  import * as React from 'react';
  
  // util to make fake data object
  let id = 0;
  const createData = (name: string, calories: number, fat: number, carbs: number, protein: number) => {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
  };
  
  // make an array of fake data
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  // create a styles object using a theme. The createStyles function is
  // needed to placate the TS compiler.
  const styles = (theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
      },
    });
  
  // declare props as an extension of the interface we just defined in the 'styles' variable. Any
  // other props can appear here. I've put one in as an example of how to use it.
  interface Props extends WithStyles<typeof styles> {
    hi: string;
  }
  
  // Here's the component, a stateless functional component that expects to receive props that match
  // the 'Props' interface. Since it is an SFC we don't write 'this.props', it is just 'props'.
  const CountListMaterialExperiment: React.SFC<Props> = props => {
    const { classes } = props;
  
    return (
      <Paper className={classes.root}>
        <p>Example use of props: {props.hi}</p>
        <Table className={classes.table} padding="dense">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell numeric>Calories</TableCell>
              <TableCell numeric>Fat (g)</TableCell>
              <TableCell numeric>Carbs (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell numeric>{row.calories}</TableCell>
                  <TableCell numeric>{row.fat}</TableCell>
                  <TableCell numeric>{row.carbs}</TableCell>
                  <TableCell numeric>{row.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  };
  
  // instrument the component with the CSS styles defined above, and export it.
  export default withStyles(styles)(CountListMaterialExperiment);