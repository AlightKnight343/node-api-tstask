const router = require('express').Router();
const data = require('./data.json')

router.get('/', (req, res)=>{
    res.send(`
        Guide to using the api:
        / - returns a list of all the endpoints
        /country/:country [UK, USA, CANADA, INDIA, FRANCE]
        /country/:x/state/:y 
        [USA: California || Texas || Florida || Washington || Pennsylvania]
        [India: Maharashtra || Karnataka || Kerala || Haryana || Chattisgarh]
        [UK: England || Scotland || Wales || Ireland]
        [France: Rhone || Picardy || Corsica || Brittany || Burgundy]
        [Canada: Ontario || Quebec || Alberta || Columbia || Manitoba]
    `)
})

router.get('/country/:country', (req, res)=>{
    const country = req.params.country.toLowerCase()
    res.json(data[country])
})


const stateRouter = require('express').Router({mergeParams:true});
stateRouter.get('/', (req, res)=> res.send("states"))

stateRouter.get('/:state', (req, res)=>{
    const State = req.params.state.toLowerCase()
    const country = req.params.country.toLowerCase()
    const stateData = data[country].states.find(state=>state.name.toLowerCase() === State)
    res.json(stateData)
})

router.use('/country/:country/state', stateRouter);


module.exports = router;