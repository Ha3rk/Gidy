const express= require('express');
const router = express.Router();
app=express();
app.use(express.json());
subscribers = []


router.get('/', (req,res)=>{

    res.send('Hello ')

})
router.get('/:id', (req,res)=>{

    res.send(req.params.id)
})

router.post('/', (req,res)=>{

    res.send(req.body.id)
})

router.put('/:id', (req,res)=>{

    
})

router.patch('/:id', (req,res)=>{

    
})

router.delete('/:id', (req,res)=>{

    
});

module.exports = router
