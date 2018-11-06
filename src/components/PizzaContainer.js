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
import GifPlayer from 'react-gif-player';
import './Components.css'


class PizzaContainer extends PureComponent {
  state = {
    expanded: null
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  }

  render() {
    const { expanded } = this.state
    return (
      <div>
        <h1>Make you delicious choices</h1>
        <Grid container spacing={24}>

          <Grid item xs={12} md={5}>

            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Choose your base</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className='panel'>
                <Base />
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Choose a sauce</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Sauce />
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Top it up</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Toppings />
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <Paper>
              <Price />
            </Paper>


          </Grid>

          <Grid item xs={12} md={7}>
            <Paper className='pizza'>
              <GifPlayer gif='https://media.giphy.com/media/l3q2x2d942PCjkblK/giphy.gif' still='https://media.giphy.com/media/l3q2x2d942PCjkblK/giphy.gif' />
            </Paper>
          </Grid>

        </Grid>


      </div>
    );
  }
}

export default PizzaContainer;
