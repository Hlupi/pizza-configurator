import React, { PureComponent } from 'react';
import Base from './Base'
import Sauce from './Sauce'
import Toppings from './Toppings'
import Price from './Price'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import './Components.css'




class PizzaContainer extends PureComponent {
  render() {
    return (
      <div>
        <h1 className="title">Make it your own</h1>
        <Grid container spacing={24}>

          <Grid item xs={12} sm={6}>
            
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Choose your base</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Base />

              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Choose a sauce</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Sauce />
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Top it up</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Toppings />
              </ExpansionPanelDetails>
            </ExpansionPanel>


          </Grid>

          <Grid item xs={12} sm={6}>
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
