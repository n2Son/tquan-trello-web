import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
function App() {

  return (
    <>
      <div>sonanhDev</div>
      <Button variant="text">Text</Button>
      <Button variant="contained">contained</Button>
      <Button variant="outlined">outlined</Button>
      <br/><br/>
      <AccessAlarmIcon/>
      <ThreeDRotation/>
      <br/>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[100] }} />
    </>
  )
}

export default App
