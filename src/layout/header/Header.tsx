import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { taskActions } from "../../store";
import { useDispatch } from "react-redux";
import Styled from './Header.style';
import appUtils from '../../utils';


type Props = {
    
}

export default function ButtonAppBar() {
  const dispatch = useDispatch()
  return (
    <Box sx={{ flexGrow: 1 , width:'100%', bgcolor:'green'}}>
      <AppBar position="static">
        <Toolbar>
          <Styled.Img src={appUtils.NOVELSAT_LOGO} alt="NOVELSAT-logo" />
        
          <Typography
            variant="h6"
            noWrap
            component={Styled.NavbarLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TODO-APP
          </Typography>
       
          <Typography variant="h6" component={Styled.NavbarLink} to='' sx={{ flexGrow: 0.2, color:'white'}} onClick={() => dispatch(taskActions.OpenModal(false))}>
            Open Tasks
          </Typography>
          <Typography variant="h6" component={Styled.NavbarLink} to='finished' sx={{ flexGrow: 0.2, color:'white'}}>
            Finished Tasks
          </Typography>
          <Styled.BtnContainer>
          <Styled.AddTaskButton onClick={()=>dispatch(taskActions.OpenModal(true))} color="inherit">Add Task</Styled.AddTaskButton>
          </Styled.BtnContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}