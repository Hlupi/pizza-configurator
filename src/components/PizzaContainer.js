import React, { PureComponent } from 'react';
import Base from './Base'
import Sauce from './Sauce'
import Toppings from './Toppings'
import Price from './Price'
import TurboDelievery from './TurboDelievery'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import './Components.css'




class PizzaContainer extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="title">Make it your own</h1>
        <Grid container spacing={24}>

          <Grid item xs={12} sm={4}>
            <Paper className="paper">
              <Base />
              <Sauce />
              <Toppings />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className="paper">
              <TurboDelievery />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className="paper">
              <Price />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper>
              <h1>PIZZA IMAGE HERE</h1>
            </Paper>
          </Grid>

        </Grid>


      </div>
    );
  }
}

export default PizzaContainer;
