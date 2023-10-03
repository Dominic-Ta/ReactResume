import React from 'react';
import { Container } from 'react-bootstrap';
import { BiLaptop, BiNews } from 'react-icons/bi'; 
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PopupButton from '../components/popupdialogue';
import Link from '@mui/joy/Link';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '.icon-box': {
        textAlign: 'center',
        padding: '30px 20px',
        background: '#fff',
        '.icon': {
            margin: '0 auto',
            width: '64px',
            height: '64px',
            background: '#eaf4fb',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            transition: 'ease-in-out 0.3s',
            color: '#3498db',
            fontSize: '28px',
        },
        'h4': {
            fontWeight: '700',
            marginBottom: '15px',
            fontSize: '24px',
            'a': {
                color: '#384046',
                transition: 'ease-in-out 0.3s',
            },
        },
        'p': {
            lineHeight: '24px',
            fontSize: '14px',
            marginBottom: '0',
        },
        '&:hover': {
            borderColor: '#fff',
            boxShadow: '0px 0 25px 0 rgba(0, 0, 0, 0.1)',
            'h4': {
                'a': {
                    color: '#3498db',
                },
            },
            '.icon': {
                color: '#3498db',
            },
        },
    },
}));

export default function Statement() {
    const tableuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M242.69 340.3h26.62v-72.6h67v-25.82h-67v-72.6h-26.62v72.6h-66.15v25.82h66.15ZM119.26 445.18h22.59v-64.54h59.7v-20.17h-59.7v-65.34h-22.59v65.34h-59.7v20.17h59.7ZM370.15 212h22.59v-64.5h60.5v-19.37h-60.5V62.79h-22.59v65.34h-59.7v19.37h59.7ZM246.72 496h19.36v-46h41.15v-16.92h-41.15v-46h-19.36v46h-40.33V450h40.33ZM120.07 212h21v-65.31h60.51v-18.56H141V62.79h-21v65.34H59.56v18.56h60.51Zm315.65 96.84h19.36v-45.18H496v-17.74h-40.92v-45.18h-19.36v45.18h-40.33v17.74h40.33Z"/><path fill="currentColor" fillRule="evenodd" d="M370.15 445.18h22.59v-64.54h60.5v-20.17h-60.5v-65.34h-22.59v65.34h-59.7v20.17h59.7Z"/><path fill="currentColor" d="M307 74.08V60.37h-40.34V16h-14.52v44.37h-40.33v13.71h40.33v44.37h14.52V74.08ZM56.11 305.61h14.52v-44.37H111v-13.71H70.63V204H56.11v43.56H16v14.52l40.11-.08Z"/></svg>
    const items = [
        {
            id: 'HtmlProjects', 
            icon: <><BiLaptop/></>,
            url: <><Link target="_blank" rel="noopener noreferrer" href="https://www.google.com" level="body-sm" variant="plain">HTML Examples</Link></>, 
            text: 'View many of my projects as done through HTML/Python and Jupyter'},
        // eslint-disable-next-line
        {
            id: 'TableuProjects', 
            icon: <>{tableuIcon()}</>, 
            url: <><PopupButton title="Tableu Examples" notif="Temporarily Disabled" text="This will be updated at a later time."/></>, 
            text: 'View some of my tableu dashboards for the public to view'},
        {
            id: 'Undergraduate Thesis', 
            icon: <><BiNews/></>, 
            url: <><Link target="_blank" rel="noopener noreferrer" href="https://aip.scitation.org/doi/abs/10.1063/1.4954278" level="body-sm" variant="plain">Undergraduate Thesis </Link></>, 
            text: 'Click this to learn more about some of my research as an undergraduate student of Physics'},
        {
            id: "Master's Thesis", 
            icon: <><BiNews/></>, 
            url: <><Link target="_blank" rel="noopener noreferrer" href="https://meetings.aps.org/Meeting/FWS18/Event/338683" level="body-sm" variant="plain">Undergraduate Thesis </Link></>, 
            text: 'Click this to learn more about some of my resesarch as a graduate student of Physics'},
        {
            id: 'Resume', 
            icon: <><BiLaptop/></>, 
            url: <><PopupButton title="Resume" notif="Temporarily Disabled" text="This will be updated at a later time."/></>, 
            text: 'Click this to learn more about some of my resesarch as a graduate student of Physics'},
    ]
    return (
        <Container>
            <div className='title'>
                <h2> What I Do </h2>
                <p> I bring insightful understandings to complex data through PowerBI/Tableau/HTML and Excel.</p>
            </div>
            <Box>
                <Grid container spacing={2} columns={{ xs: 1, sm: 3, md: 3, lg: 3, xl: 12 }}>
                    {items.map((item)=>(
                        <Grid key={item.id} xs={4} md={1} lg={1} xl={4}>
                            <Item>
                                <div className="icon-box">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    {item.url}
                                    <p>{item.text}</p>
                                </div>
                            </Item>
                        </Grid>
                    ))}         
                </Grid>
            </Box>
        </Container>
    );
}
