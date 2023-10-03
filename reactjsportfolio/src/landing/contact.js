import React, { useState }  from 'react';
import { Box, TextField } from "@mui/material";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { GeoAlt,Envelope,Phone } from 'react-bootstrap-icons';
// may want to address importing the address constant directly later when adding
// more websites.

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Contactinfo(){
    return (
        <>
            <div className="section-title">
                <h2>Contact</h2>
                <p>Feel free to send a message! I'll respond whenever I can.</p>
            </div>
            <div className="row mt-5 justify-content-center">
                <div className="col-lg-10">
                    <div className="info-wrap">
                        <div className="row">
                            <div className="col-lg-4 info">
                                <a href="https://maps.app.goo.gl/yEmUswh5MjGEupMQ6" target="_blank" rel="noopener noreferrer nofollow" ><i className="bi"><GeoAlt/></i></a>
                                <h4>Location:</h4>
                                <p>Queens, New York</p>
                            </div>
                            <div className="col-lg-4 info mt-4 mt-lg-0">
                                <i className="bi"><Envelope/></i>
                                <h4>Email:</h4>
                                <p>martineztadominic@gmail.com</p>
                            </div>
                            <div className="col-lg-4 info mt-4 mt-lg-0">
                                <i className="bi"><Phone/></i>
                                <h4>Phone #:</h4>
                                <p>N/A</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
function SendEmail({ name, email, subject, body, onFetchComplete }) {
  let dat = {
    Contact_Name: name,
    Contact_Email: email,
    Subject: subject,
    Message: body,
  };

  fetch('http://localhost:8000/get-csrf-token/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((data) => {
      const csrfToken = data.csrfToken;

      fetch('http://127.0.0.1:8000/send-email/' + JSON.stringify(dat), {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
      })
        .then(response => {
          const statusCode = response.status;
          onFetchComplete(statusCode); // Call the callback with the status code
          if (response.ok) {
            console.log('Email sent successfully.');
            
          } else {
            console.log(response);
            console.error('Error sending email.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function ShowAlert({ open, setOpen, statusCode }) {
  let sev;
  let res;
  if (statusCode === 200) {
    sev = "success";
    res = "Message successfully sent!";
  } else {
    sev = "error";
    res = "Uh oh, Please try again later. If the issue persists, please let an admin know.";
  }
  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity = {sev}
          action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false); }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <p>{res}</p>
        </Alert>
      </Collapse>
    </Box>
  );
}

function Contactus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [subject, setSubject] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  // eslint-disable-next-line
  const [statusCode, setStatusCode] = useState(null);

  const handleSendClick = () => {
    setShowAlert(true);
    SendEmail({ name, email, subject, body, onFetchComplete: setStatusCode });
  };

    return (
      <div className="container text-center">
        <Contactinfo />
        <Card variant="outlined">
          <div className="row mt-5 justify-content-center">
            <Box sx={{ display: 'inherit', alignItems: 'center', '& > :not(style)': { m: 1 }, }}>
              <Grid container spacing={2} rowSpacing={3}>
                <Grid item xs={12} sm={6}>
                  <Item>
                    <TextField
                      helperText=" "
                      id="CName"
                      label="Contact Name"
                      variant="outlined"
                      onChange={(e) => setName(e.target.value)}
                      fullWidth // Make the input full-width
                      sx={{ fontSize: '16px' }} // Adjust font size for mobile
                    />
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Item>
                    <TextField
                      helperText=" "
                      id="CEmail"
                      label="Contact Email"
                      variant="outlined"
                      onChange={(e) => setEmail(e.target.value)}
                      fullWidth // Make the input full-width
                      sx={{ fontSize: '16px' }} // Adjust font size for mobile
                    />
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    helperText=" "
                    id="CSubject"
                    label="Subject"
                    variant="outlined"
                    onChange={(e) => setSubject(e.target.value)}
                    fullWidth // Make the input full-width
                    sx={{ fontSize: '16px' }} // Adjust font size for mobile
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" endIcon={<SendIcon />} onClick={handleSendClick}>
                    Send
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    inputProps={{ maxLength: 1000 }}
                    label="Input"
                    id="CBody"
                    variant="outlined"
                    onChange={(e) => setBody(e.target.value)}
                    sx={{ fontSize: '16px' }} // Adjust font size for mobile
                  />
                </Grid>
              </Grid>
            </Box>
          </div>
        </Card>
        {showAlert && (
          <ShowAlert open={true} setOpen={setShowAlert} statusCode={statusCode}/>
        )}
      </div>
    );
}
export default Contactus;