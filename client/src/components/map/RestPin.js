import PushPin from '@mui/icons-material/PushPinOutlined';
const RestPin = ({ text }) => (
  <div className="pin">
    <PushPin/>
    <p className="pin-text" style={{fontSize:"1rem"}}>{text}</p>
  </div>
)
export default RestPin;