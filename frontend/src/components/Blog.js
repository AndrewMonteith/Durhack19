import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Markdown from './Markdown';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import SearchBar from './SearchBox'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">

        </Typography>
    );
}

let username

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    mainFeaturedPost: {
        position: 'relative',
        height: '600px',
        textAlign: 'left',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://images.ctfassets.net/j2n94q3surmy/2R8y1rrCKswo0GWk0YW02S/a424d14512878fdaf5e1ce93503f1055/How_to_Find_a_Carer___Dementia_Live-in_Care___Elder.jpg?w=1200&h=630&fit=fill&q=85)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card: {
        display: 'flex',
        height: 250,
        textAlign: 'left',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
    contactButton: {
        position: 'absolute',
        bottom: '5%',
        margin: '5% 0 0'
    },
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    loginform: {
        display: 'block',
        width: '100%'
    },
    loginformbox: {
        width: 300,
        
    }
}));


const _featuredPosts = []
let input;



export default function Blog() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        featuredPosts: [], //_featuredPosts
        showMsgDialog: false,
        showLoginDialog: false,
        isLoggedin: false,
        username: '',
        phone: ''
    });

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Button size="small">ABOUT US</Button>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Hand.
          </Typography>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    {state.isLoggedin ? <Typography variant="h6">{username}</Typography> : <Button onClick={() => setState({ featuredPosts: state.featuredPosts, showMsgDialog: state.showMsgDialog, showLoginDialog: true })} variant="outlined" size="small">
                        Login
                     </Button>}
                    <Dialog aria-labelledby="customized-dialog-title" open={state.showLoginDialog}>
                        <MuiDialogTitle disableTypography className={classes.root}>
                            <Typography variant="h6">Login</Typography>
                            <IconButton aria-label="close" className={classes.closeButton} onClick={() => setState({ featuredPosts: state.featuredPosts, showMsgDialog: state.showMsgDialog, showLoginDialog: false })}>
                                <CloseIcon />
                            </IconButton>
                        </MuiDialogTitle>
                        <DialogContent dividers>
                            <div className={classes.loginformbox} >
                                <TextField className={classes.loginform} onChange={(e) => { username = e.target.value }} id="standard-name" label="Name" placeholder="Joe Bloggs" />
                                <TextField className={classes.loginform} id="standard-phone" label="Phone Number" placeholder="079123426754" />

                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={() => {
                                setState({ featuredPosts: state.featuredPosts, showMsgDialog: state.showMsgDialog, showLoginDialog: false, isLoggedin: true })}} color="primary">
                                
                                Login
          </Button>
                        </DialogActions>
                    </Dialog>

                </Toolbar>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                </Toolbar>
                <main>

                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        {/* Increase the priority of the hero background image */}
                        {
                            <img
                                style={{ display: 'none' }}
                                // src="https://images.ctfassets.net/j2n94q3surmy/2R8y1rrCKswo0GWk0YW02S/a424d14512878fdaf5e1ce93503f1055/How_to_Find_a_Carer___Dementia_Live-in_Care___Elder.jpg?w=1200&h=630&fit=fill&q=85"
                                // src={carer}
                                alt="background"
                            />
                        }
                        <div className={classes.overlay} />
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        When you just need <br></br>a helping hand...
                    <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                    </Typography>
                                </div>
                            </Grid>
                            <SearchBar updateFeatureCards={(cards) => {
                                setState({ featuredPosts: JSON.parse(cards), showMsgDialog: false })
                            }} />
                        </Grid>
                    </Paper>
                    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    </Toolbar>
                    {/* End main featured post */}
                    {/* Sub featured posts */}
                    <Grid container spacing={4}>
                        {state.featuredPosts.map(post => (
                            <Grid item key={post.user !== undefined ? post.user : post.name} xs={12} md={6}>
                                <CardActionArea component="a" href="#">
                                    <Card className={classes.card}>
                                        <div className={classes.cardDetails}>
                                            <CardContent>
                                                <Typography component="h2" variant="h5">
                                                    {post.user !== undefined ? post.user : post.name} {post.when !== undefined ? `(${post.when})` : ''}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {post.isCharity ? post.phoneNumber : (post.who !== undefined ? post.who : '')}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {post.postcode !== undefined ? post.postcode : post.where}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {post.desc !== undefined ? post.desc : ''}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {}
                                                </Typography>
                                                <Typography variant="subtitle1" paragraph color="textSecondary">
                                                    {post.carees !== undefined ? `Cares for someone with: ${post.carees.map(caree => caree.disability).join(", ")}` : post.for !== undefined ? `For people with: ${post.for.map(f => f).join(", ")}` : `Experience with: ${post.specialities.map(specialty => specialty).join(", ")}`}
                                                </Typography>
                                                <Typography variant="subtitle1" color="primary" onClick={(e) => {
                                                    setState({ featuredPosts: state.featuredPosts, showMsgDialog: true })
                                                }}>
                                                </Typography>

                                                <Dialog open={state.showMsgDialog} aria-labelledby="form-dialog-title">
                                                    <DialogTitle id="form-dialog-title">Send Message</DialogTitle>
                                                    <DialogContent>
                                                        <DialogContentText>
                                                            Write here the text message you wish to send. Don't forget to be polite!
                                                        </DialogContentText>
                                                        <TextField
                                                            autoFocus
                                                            margin="dense"
                                                            id="msg"
                                                            label="Message"
                                                            placeholder="Write your message here"
                                                            multiline="true"
                                                            rows="4"
                                                            maxLength="220"
                                                            fullWidth
                                                            // value={state.value}

                                                            onChange = { (e) => { 
                                                                console.log(e.target.value)
                                                                input = e.target.value
                                                            } }
                                                                // setState({ value: e.target.value, ...state}) } }
                                                            // onChange={(e) => console.log(e.target.value)}                                                            }}
                                                        />
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={() => setState({ featuredPosts: state.featuredPosts, showMsgDialog: false })} color="primary">
                                                            Cancel
                                                        </Button>
                                                        <Button onClick={() => {
                                                            const msg = input //document.getElementById("msg").value
                                                            console.log(`sending ${msg}`)

                                                            const blob = {
                                                                msg,
                                                                numberFrom: "+447956265784",
                                                                post
                                                            }

                                                            fetch(`http://localhost:5000/message`, 
                                                                {
                                                                    method: "post",
                                                                    body: JSON.stringify(blob),
                                                                    headers: { 'Content-type': 'application/json'}
                                                                })
                                                                .then(() => console.log("fuck yeah"))
                                                                .catch(e => console.log("fuck", e))
                                                        }} color="primary">
                                                            Send
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                                <Button className={classes.contactButton} onClick={() => setState({ featuredPosts: state.featuredPosts, showMsgDialog: true })}>Contact {post.user !== undefined ? post.user : post.name}</Button>
                                            </CardContent>
                                        </div>
                                        {/* <Hidden xsDown> */}
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                        {/* </Hidden> */}
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        ))}
                    </Grid>
                    {/* End sub featured posts */}
                    <Grid container spacing={5} className={classes.mainGrid}>
                        {/* Main content */}
                        <Grid item xs={12} md={8}>
                            {/* <Typography variant="h6" gutterBottom>
                From the Firehose
              </Typography>
              <Divider />
              {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
              ))} */}
                        </Grid>
                        {/* End main content */}

                    </Grid>
                </main>
            </Container>
            {/* Footer */}
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
          </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
          </Typography>
                    <Copyright />
                </Container>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}