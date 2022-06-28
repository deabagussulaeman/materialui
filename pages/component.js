import Skelkel from '@/components/Skeleton'
import CardMakanan from '@/components/CardMakanan'
import React, { useEffect, useState } from "react"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

export default function Home() {
    const clasGrid = gridStyle();

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
    
    if (isLoading) return (
        <Skelkel nama="suleeee"/>
    )
    
    if (!data) return <p>No profile data</p>
    
    console.log('cek cek halaman Component', data);

    return (
        <div className={clasGrid.root}>
            <br/>
            <Grid container spacing={3}>
                {
                    data.meals.map(item => (
                        <Grid item xs={4} key={item.idMeal}>
                            <CardMakanan strMealThumb={item.strMealThumb} strMeal={item.strMeal}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}