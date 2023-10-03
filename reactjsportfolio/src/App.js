import './App.css';
import HorizontalBars from './charts/barchart';
import MarkOptimization from './charts/linechart';
import { title, sections } from './inputs/constants';
import NavBar from './components/header';
import './sassfiles/bootstrap.scss';
import Container from 'react-bootstrap/Container';
import Welcome from './landing/welcome';
import Statement from './landing/whatido';
import ComplexGrid from './landing/about';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Paper } from '@mui/material';
import Skilllevels from './landing/skills';
import Skills from './landing/counts';
import Experience from './landing/experience';
import Contactus from './landing/contact';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <NavBar title={title} sections={sections} />
      </header>
      <section id="Home" className="d-flex flex-column justify-content-center align-items-center">
        <Welcome />
      </section>
      {/* <Paper
              sx={{
                p: 2,
                margin: 'auto',
                maxWidth: '75%',
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            > */}
            <Container>
        <Grid2 container justify="flex-end" spacing={2}>
          <Grid2 xs={12} md={12} xl={12}>
            <section id="WhatIDo" className="WhatIDo">
              <Statement/>
            </section>
          </Grid2>
          <Grid2 xs={12} md={12} xl={12}>
            <section id="about" className="about">
              <ComplexGrid />
            </section>
            <section id="skills" className="skills m-3">
              <Skilllevels />
            </section>
            <section id="counts" className='counts'>
             <Skills />
            </section>
            <section id="experience" className="experience">
              <Experience/>
            </section>
            <section id="contact" className='contact'>
              <Contactus />
            </section>
          </Grid2>
        </Grid2>
        {/* <HorizontalBars />
        <Container className='overflow-auto'>
          <MarkOptimization />
        </Container> */}
        </Container>
      {/* </Paper> */}
    </div>
  );
}

export default App;
