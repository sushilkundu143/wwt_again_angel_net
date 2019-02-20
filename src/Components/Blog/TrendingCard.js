import React ,{Component} from 'react';
import Paper from '@material-ui/core/Paper'
 
 
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import LikeIcon from '@material-ui/icons/ThumbUp';
import {Link} from 'react-router-dom'
import {CardColumns , Card} from 'react-bootstrap' 

 {/*
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
 import Typography from '@material-ui/core/Typography';*/}
const tileData = [
    {
   img: "https://www.bizsugar.com/image-01.png",
   title: 'Small Business',
   author: 'bizsugar',
   link:"https://www.bizsugar.com/",
    },
    {
        img: "https://s3.amazonaws.com/kabbage-media-user/blog/wp-content/uploads/2018/01/29105224/tools-from-home.jpg",
        title: 'Incredible Elevator Pitching',
        author: 'Kabbage',
        link:"https://www.kabbage.com/blog/how-to-write-an-incredible-elevator-pitch/",
         },{
            img: "https://s3.amazonaws.com/diymarketers-image-library/wp-content/uploads/2019/02/07091336/shutterstock_507701938.jpg",
            title: 'Logo Designing',
            author: 'DiyMartkers',
            link:"https://diymarketers.com/create-a-logo-visual-identity-without-design-skills/"
             },
             {
                img: "https://s3.amazonaws.com/diymarketers-image-library/wp-content/uploads/2019/02/07091336/shutterstock_507701938.jpg",
                title: 'Logo Designing',
                author: 'DiyMartkers',
                link:"https://diymarketers.com/create-a-logo-visual-identity-without-design-skills/"
                 },{
                    img: "https://s3.amazonaws.com/diymarketers-image-library/wp-content/uploads/2019/02/07091336/shutterstock_507701938.jpg",
                    title: 'Logo Designing',
                    author: 'DiyMartkers',
                    link:"https://diymarketers.com/create-a-logo-visual-identity-without-design-skills/"
                     },{
                        img: "https://s3.amazonaws.com/diymarketers-image-library/wp-content/uploads/2019/02/07091336/shutterstock_507701938.jpg",
                        title: 'Logo Designing',
                        author: 'DiyMartkers',
                        link:"https://diymarketers.com/create-a-logo-visual-identity-without-design-skills/"
                         },{
                            img: "https://s3.amazonaws.com/diymarketers-image-library/wp-content/uploads/2019/02/07091336/shutterstock_507701938.jpg",
                            title: 'Logo Designing',
                            author: 'DiyMartkers',
                            link:"https://diymarketers.com/create-a-logo-visual-identity-without-design-skills/"
                             },{
                                img: "https://s3.amazonaws.com/diymarketers-image-library/wp-content/uploads/2019/02/07091336/shutterstock_507701938.jpg",
                                title: 'Logo Designing',
                                author: 'DiyMartkers',
                                link:"https://diymarketers.com/create-a-logo-visual-identity-without-design-skills/"
                                 },{
                                    img: "https://s3.amazonaws.com/diymarketers-image-library/wp-content/uploads/2019/02/07091336/shutterstock_507701938.jpg",
                                    title: 'Logo Designing',
                                    author: 'DiyMartkers',
                                    link:"https://diymarketers.com/create-a-logo-visual-identity-without-design-skills/"
                                     },{
                                        img: "https://s3.amazonaws.com/diymarketers-image-library/wp-content/uploads/2019/02/07091336/shutterstock_507701938.jpg",
                                        title: 'Logo Designing',
                                        author: 'DiyMartkers',
                                        link:"https://diymarketers.com/create-a-logo-visual-identity-without-design-skills/"
                                         },{
                                            img: "https://s3.amazonaws.com/diymarketers-image-library/wp-content/uploads/2019/02/07091336/shutterstock_507701938.jpg",
                                            title: 'Logo Designing',
                                            author: 'DiyMartkers',
                                            link:"https://diymarketers.com/create-a-logo-visual-identity-without-design-skills/"
                                             },

            
            
            ]
export default class TitlebarGridList extends Component{
 styles ={
    row :{
        display: 'flex',
        flexWrap: 'wrap',
        padding:' 0 4px'
      },
      
      /* Create two equal columns that sits next to each other */
      column: {
        flex: '50%',
        padding: '0 4px'
      }
      ,
      columnImg :{
        marginTop: '8px',
        verticalAlign: 'middle'
      }
}

classes={
    card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
}


  render(){

  return (
      <div style={{
          width:'100%',
          height:500,
          paddingBottom:10,
          display:'flex' ,
          flexDirection:'column' 
      }}> 
      <p style={{fontSize:30,fontWeight:'bold',color:'#0b3253',margin:20}}>Trending</p>
    <Paper  
         className="companies-list" 
      
          style={{overflow:'auto'}}

    >
      <div className="row" style={{ display: "flex" }}>    {/*  <GridList cellHeight={180} className={this.styles.gridList} style={{overflow:'auto'}}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"> <p style={{marginBottom:10,fontSize:30,fontWeight:'bold',color:'#0b3253'}}>News</p></ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}    >
          <a href={tile.link}>
            <img src={tile.img} alt={tile.title}  />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
               
                  <LikeIcon style={{color:'#fff',marginRight:20}}/>
               
              }
            />
            </a>
          </GridListTile>
        ))}
      </GridList>*/}
    {/* {
         tileData.map(tile =>(
            <a href={tile.link} key={tile.img} style={{maxWidth:'33%',margin:5,minWidth:200}}> 
            <Card className={this.classes.card} style={{width:'100%'}}>
      <CardActionArea>
      {/*  <CardMedia
          className={this.classes.media}
          image={tile.img}
          title={tile.title}
      /> 
      <img src={tile.img} alt={tile.title} style={{width:'100%'}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {tile.title}
          </Typography>
          <Typography component="p">
          By : {tile.author}
          </Typography>
        </CardContent>
      </CardActionArea>
     {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
     </CardActions>
    </Card>
            </a>*/}
 <CardColumns style={{marginTop:10,marginBottom:10}}>
     {tileData.map(tile=>(

<a href={tile.link} key={tile.img} style={{margin:10}}> 
     
  <Card>
    <Card.Img variant="top" src={tile.img} />
    <Card.Body>
      <Card.Title>{tile.title}</Card.Title>
      <Card.Text>
       By :{tile.author}
      </Card.Text>
    </Card.Body>
  </Card>
  </a>
  ))}
         </CardColumns>

</div>
    </Paper>
    </div>
  );
}
}
