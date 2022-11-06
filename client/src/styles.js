import { makeStyles } from '@material-ui/core/styles';
//call back function it returns object.
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  //to filter material-ui provides break points called media queries by following syntax
  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection : 'column-reverse'
    }
  }
  //this is only for mobiles.
}));