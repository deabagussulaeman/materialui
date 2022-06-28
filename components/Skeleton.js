import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Skeleton from '@material-ui/lab/Skeleton';

const gridStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));    

export default function Home(props) {
    const clasGrid = gridStyle();
    return (
        <div className={clasGrid.root}>
            <br /><br />
            
            <Grid container spacing={3}>
                {[0,1,2,3,4,5,6,7,8].map(item => (
                    <Grid item xs={4} key={item}>
                        <Card>
                            <CardActionArea>  
                                {/* {props.nama}                               */}
                                <Skeleton variant="rect" width="100%" height={118} />
                                <br />
                                <Skeleton variant="rect" width={300} height={50} />
                            </CardActionArea>
                            <CardActions>
                                <Skeleton variant="rect" width={100} height={30} />
                                <Skeleton variant="rect" width={100} height={30} />
                            </CardActions>
                        </Card> 
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}