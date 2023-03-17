import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const SwitchBtn = () => {
  
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0, 
  // margin: 30, 
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
      
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
   
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      // color: 'red', 
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#0c1c65' : '#0c1c65',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? '#0c1c65' : '#0c1c65',
    boxSizing: 'border-box',
  },
}));

  return (
    <FormGroup>
       <Stack direction="row" spacing={1} alignItems="center">
        <Typography></Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography></Typography>
      </Stack>
    </FormGroup>
  )
}

export default SwitchBtn


