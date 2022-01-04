import PushPin from '@mui/icons-material/PushPinOutlined';
const RestPin = ({ text }) => (
  <div className="pin">
    <PushPin/>
    <p className="pin-text">{text}</p>
  </div>
)
export default RestPin;