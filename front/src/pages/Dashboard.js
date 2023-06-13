import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { Grid } from '@mui/material/';
import { Button } from '@material-ui/core';
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Pôle Médecine', 'Pôle Mère-Enfant', 'Pôle Plateau Technique', 'Pôle Chirurgie', 'Pôle Gérontologie', 'Pôle Médico-Technique']
        }
      },
      series: [
        {
          name: "Événements déclarés par pôle",
          data: [30, 40, 45, 50, 49, 60]
        }
      ],
      series1: [44, 55, 13, 33],
      donutOptions: {
        chart: {
          width: 380,
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false
            }
          }
        }],
        legend: {
          position: 'right',
          offsetY: 0,
          height: 230,
        }
      },
    };
  }


  
  appendData() {
    const randomValue = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    this.setState((prevState) => ({
      series1: [...prevState.series1, randomValue]
    }));
  }

  removeData() {
    if (this.state.series1.length === 1) return;

    this.setState((prevState) => ({
      series1: prevState.series1.slice(0, -1)
    }));
  }

  randomize() {
    this.setState((prevState) => ({
      series1: prevState.series1.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    }));
  }

  reset() {
    this.setState({
      series1: [44, 55, 13, 33]
    });
  }

  render() {
    return (
      <div className="donut">
        <h2>
          <center>Bienvenue dans ce dashboard</center>
        </h2>



        <Grid container justifyContent="center" alignItems="center">
  <Grid item>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center', 
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
          margin:"20px",
        
        },
      }}
    >
<Paper elevation={3} style={{ borderColor: '#ff355e', borderWidth: '2px', borderStyle: 'solid', width: '200px', height: '200px' }}>
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <div style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '20px', marginTop: '20px' }}>1</div>
    <div style={{ fontSize: '15px', textAlign: 'center' }}>Evénement déclarés aujourd'hui</div>
  </div>
</Paper>
<Paper elevation={3} style={{ borderColor: '#1E90FF', borderWidth: '2px', borderStyle: 'solid', width: '200px', height: '200px' }}>
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <div style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '20px', marginTop: '20px' }}>30 %</div>
    <div style={{ fontSize: '15px', textAlign: 'center' }}>Evénement analysés à ce jour</div>
  </div>
</Paper>
<Paper elevation={3} style={{ borderColor: 'orange', borderWidth: '2px', borderStyle: 'solid', width: '200px', height: '200px' }}>
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <div style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '20px', marginTop: '20px' }}>6</div>
    <div style={{ fontSize: '15px', textAlign: 'center' }}>Never Event déclarés à ce jour</div>
  </div>
</Paper>
<Paper elevation={3} style={{ borderColor: '#00FA9A', borderWidth: '2px', borderStyle: 'solid', width: '200px', height: '200px' }}>
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <div style={{ fontSize: '50px', fontWeight: 'bold', marginBottom: '20px', marginTop: '20px' }}>3</div>
    <div style={{ fontSize: '15px', textAlign: 'center' }}>Actions déclarées à ce jour</div>
  </div>
</Paper>






    </Box>
  </Grid>
</Grid>























<Grid container spacing={2} justifyContent="center">
  <Grid item sm={6}>
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <h3>Graphique des événements déclarés par pôle</h3>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={500}
        />
      </Grid>
      <Grid item sm={12}>
        <Button variant="contained" color="primary" style={{ backgroundColor: "#1E90FF", marginTop: "20px" }}>
          Consulter les erreurs médicamenteuses analysées
        </Button>
      </Grid>
    </Grid>
  </Grid>
  <Grid item sm={6}>
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <h3>Graphique des événements analysés en fonction de leur taux de gravité</h3>
        <div className="chart-wrap">
          <div id="chart">
            <Chart
              options={this.state.donutOptions}
              series={this.state.series1}
              type="donut"
              width={380}
            />
          </div>
        </div>
        <div className="actions">
          <button onClick={() => this.appendData()}>+ ADD</button>
          &nbsp;
          <button onClick={() => this.removeData()}>- REMOVE</button>
          &nbsp;
          <button onClick={() => this.randomize()}>RANDOMIZE</button>
          &nbsp;
          <button onClick={() => this.reset()}>RESET</button>
        </div>
      </Grid>
      <Grid item sm={12}>
        <Button variant="contained" color="primary" style={{ backgroundColor: "#1E90FF", marginTop: "20px" }}>
          Consulter toutes les déclarations initiales
        </Button>
      </Grid>
    </Grid>
  </Grid>
</Grid>

      </div>
    );
  }
}

export default Dashboard;
