import express, {Application , Request,Response ,NextFunction} from 'express';
import cors from 'cors'

const app:Application = express();
const PORT:Number = 24567;


app.use(cors);
app.get('/', (req:Request,res:Response,nxtfn:NextFunction)=>{
    res.send([{
        "underweight": 18.5,
        "Normal": 24.9,
        "overweight": 29.5,
        "obese" : 29.6
    }]);
})


app.listen(PORT , ()=>{
    console.log(`server started at port ${PORT}`);
})