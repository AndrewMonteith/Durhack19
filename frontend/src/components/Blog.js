import  React from 'react';
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
import Markdown from './Markdown';
import SearchBar from './SearchBox'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">

        </Typography>
    );
}

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
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
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
        height: 200,
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
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));

const sections = [
    'ggegre',
    'gtehugre',
    'vdvrdvrv'
];

const _featuredPosts = [
    {
        "where": "DH8 9LD",
        "when": "2019-12-01",
        "who": "Helping You",
        "name": "Horse Riding",
        "desc": "Come and ride some horses and chill out",
        "for": ["autism", "adhd", "aspergers"]
    },
    {
        "where": "DH3 2LY",
        "when": "2019-15-02",
        "who": "Hettie Delvin",
        "name": "Fairground",
        "desc": "Enjoy the bright lights and funfair rides!",
        "for": ["spina bifida", "motor neuron disease"]
    },
  ]

const posts = ['frfr', 'eee', 'dede'];



const social = ['GitHub', 'Twitter', 'Facebook'];

export default function Blog() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        featuredPosts: [] //_featuredPosts
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
                        <SearchIcon/>
                    </IconButton>
                    <Button variant="outlined" size="small">
                        Login
          </Button>
                </Toolbar>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    {/* {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))} */}
                </Toolbar>
                <main>
                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        {/* Increase the priority of the hero background image */}
                        {
                            <img
                                style={{ display: 'none' }}
                                src="https://source.unsplash.com/user/erondu"
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
                                    {/* <Typography variant="h5" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    Continue reading…
                  </Link> */}
                                </div>
                            </Grid>
                            <SearchBar updateFeatureCards={(cards) => {
                                console.log(cards)
                                setState({featuredPosts: JSON.parse(cards)}) 
                            }} />
                        </Grid>
                    </Paper>
                    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                        {/* {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))} */}
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
                                                    {post.phoneNumber !== undefined ? post.phoneNumber : post.who}
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
                                                    {post.carees !== undefined ? `Cares for: ${post.carees.map(caree => caree.disability).join(", ")}` : post.for !== undefined ? `For people with: ${post.for}` : `Experience with: ${post.specialities}`}
                                                </Typography>
                                                <Typography variant="subtitle1" color="primary">
                                                    Continue reading...
                        </Typography>
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