import { AppBar, Avatar, Divider, IconButton, Stack, styled, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Apps';
import Accueil from '../pages/Accueil';
import Authentification from '../pages/Authentification';



function TopBar() {


  function clickAvatar() {
    console.log("clique sur avatar");
    <Authentification/>
  }

  function clickMenu() {
    console.log("clique sur menu");
    <Accueil/>
  }

  const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: "inherit",
    "&:hover": {
      "background-color": '#A1CB6B'
    }
  }));

  //0063AF bleu aphp
  //545454 gris clair
  //A1CB6B vert moabi
  //707070  gris fonce

  return (
    <AppBar position='sticky' style={{ background: '#0063AF' }}>
      <Toolbar variant='dense'>

        <Divider orientation='vertical' flexItem />
        <Stack direction="row" width={"100%"} spacing={2} justifyContent="flex-end">
          <StyledIconButton aria-label="Menu" title="Menu" onClick={clickMenu}><HomeIcon /></StyledIconButton>
          <StyledIconButton aria-label="Deconnection" title="Deconnection" onClick={clickAvatar}><Avatar/></StyledIconButton>
        </Stack>
      </Toolbar>

    </AppBar>
  )
}
export default TopBar;