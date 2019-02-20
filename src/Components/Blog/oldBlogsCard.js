import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import LikeIcon from '@material-ui/icons/ThumbUp';

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
             }
            
            
            ]
export default class TitlebarGridList extends Component{
 styles ={
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: '#fff',
  },
}



  render(){
console.log('blog')
  return ( 
    <div className={this.styles.root} >
      <GridList cellHeight={180} className={this.styles.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"> <p style={{marginBottom:10,fontSize:30,fontWeight:'bold',color:'#0b3253'}}>Blogs</p></ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
               
                  <LikeIcon style={{color:'#fff',marginRight:20}}/>
               
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
}
