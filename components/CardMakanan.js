import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Home(props) {
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.strMealThumb}
                title="Contemplative Reptile"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.strMeal}
                    </Typography>
                </CardContent>
            </CardActionArea>
            
            <CardActions className="bgblue">
                <Button size="small" color="primary">
                    Share
                </Button>
                
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}