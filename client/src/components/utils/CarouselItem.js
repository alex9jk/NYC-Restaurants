import { Paper, Button } from '@mui/material'

//const img1 = require("../../images/img1.jpg");
function CaroselItem(props)
{
    return (
        <Paper style={{width:"80%",margin:"0 auto", textAlign:"center"}}>
            <img src={props.item.img} alt ="#" style={{width:"35%"}}/>
        </Paper>
    )
}
export default CaroselItem