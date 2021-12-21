import LocationIcon from '@mui/icons-material/LocationOn';
const LocationPin = ({ text }) => (
  <div className="pin">
    <LocationIcon/>
    <p className="pin-text">{text}</p>
  </div>
)
export default LocationPin;