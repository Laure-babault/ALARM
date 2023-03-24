import { AppBar, Avatar, IconButton, Stack, styled, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Apps';
import ChicCMLogo from '../image/Logo-CHIC-castres-mazamet.jpg'
import Accueil from '../pages/Accueil';
import Authentification from '../pages/Authentification';

//couleur vert  	#7DC4B2
// couleur gris 	#506C7A

function TopBar() {


  function clickAvatar() {
    console.log("clique sur avatar");
    return(
      <Authentification/>
    )
  }

  function clickMenu() {
    console.log("clique sur menu");
    return(
      <Accueil/>
    )
  }

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: "inherit",
    "&:hover": {
      "background-color": '#506C7A'
    }
  }));

  return (
    <AppBar position='sticky' style={{ background: '#7DC4B2' }}>
      <Toolbar variant='dense'>

        <img height="30px" src={ChicCMLogo} alt="Logo du chic de Castres-Mazamet"/>
      
        <Stack direction="row" width={"100%"} spacing={2} justifyContent="flex-end">
          <StyledIconButton aria-label="Menu" title="Menu" onClick={clickMenu}><HomeIcon /></StyledIconButton>
          <StyledIconButton aria-label="Deconnection" title="Deconnection" onClick={clickAvatar}><Avatar/></StyledIconButton>
        </Stack>
      </Toolbar>              
    </AppBar>
  )
}
export default TopBar;