import React from "react";
import { styled } from '@mui/material/styles';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Card }from "@mui/material"
import { Typography, ButtonBase } from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SchoolIcon from '@mui/icons-material/School';
import { Psychology,Engineering } from "@mui/icons-material";
// MAY HAVE TO DO THIS IN BOOTSTRAP AND NOT IN PURELY REACTJS,
// DOES NOT LOOK GOOD ON MOBILE NOR DOES IT ALIGN.


function TypeInputs() {
  return (
    <>
      <Typography className="AboutMe" gutterBottom variant="subtitle1" component="h4">
      About me and this website
      </Typography>
      <Typography className="AboutMe" variant="body2" component="p" gutterBottom>
        This is a website where I display my skills, resume and portfolio to those interested.
        If you're curious to learn more, feel free to reach out. Here's what I offer: 
      </Typography>
      <Typography variant="body2" component="ul" color="text.secondary">
        <Typography variant="body2" component="li">
          <DoneAllIcon /> I Guaranteed results
        </Typography>
        <Typography variant="body2" component="li">
          <DoneAllIcon /> I'm unbiased towards Data
        </Typography>
        <Typography variant="body2" component="li">
          <DoneAllIcon /> I provide quality tools and insights not often understood by other individuals
        </Typography>
      </Typography>
    </>
  );
}
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));
  export default function ComplexGrid() {
    return (
      <>
          <Grid2 container spacing={2}>
            <Grid2 xs={12} md={6} xl={6}>
              <ButtonBase sx={{ width: 'auto', height: 'auto' }}>
                <Img alt="complex" src="././assets/images/detective_bmo.jpg" />
              </ButtonBase>
            </Grid2>
            <Grid2  xs={12} sm alignItems={true}>
              <Grid2  xs item direction="column" spacing={2}>
                <Grid2 xs>
                  <TypeInputs />
                </Grid2>
                Q: So what sets me apart from the rest? 
                <br />
                A: My Background.
                <Grid2 container spacing={2}>
                  <Grid2 xs={6} md={6} xl={6}>
                    <Item >
                      <div className="icon-boxes">
                        <HistoryEduIcon />
                      </div>
                      <Typography variant="body2" component="p" gutterBottom>
                        I have experience in over 5 different industries
                      </Typography>
                    </Item>
                  </Grid2>
                  <Grid2 xs={6} md={6} xl={6}>
                    <Item>
                      <div className="icon-boxes">
                        <SchoolIcon />
                      </div>
                      <Typography variant="body2" component="p" gutterBottom>
                        &nbsp;I have a graduate degree in Physics!
                      </Typography>
                    </Item>
                  </Grid2>
                  <Grid2 xs={6} md={6} xl={6}>
                    <Item>
                      <div className="icon-boxes">
                        <Psychology />
                      </div>
                      <Typography variant="body2" component="p" gutterBottom>
                        &nbsp; I'm entirely self taught.
                      </Typography>
                    </Item>
                  </Grid2>
                  <Grid2 xs={6} md={6} xl={6}>
                    <Item>
                      <div className="icon-boxes">
                        <Engineering />
                      </div>
                      <Typography variant="body2" component="p" gutterBottom>
                        &nbsp; I have experience in both data, and Full Stack  Software Engineering
                      </Typography>
                    </Item>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
      </>
    );
  }