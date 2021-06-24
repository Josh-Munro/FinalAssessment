const express = require('express');
const router = express.Router();
const User = require('../models/user')
const Item = require('../models/item')

const mongoose = require('mongoose');
const db = "mongodb://127.0.0.1:27017/CanGive"

//Testing Mongoose connection
mongoose.connect(db, err =>{
    if (err) {
        console.error('Error' + err)
    }
        else {
            console.log('Connected to MongoDB')
        }
})

router.get('/', (req, res) => {
    res.send('From API route')
});

//Register API

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
            console.log('Registered');
        }
    })
})

//Login API
router.post('/login', (req, res) => {
    let userData = req.body
    console.log('Im am here');
    User.findOne({Email: userData.Email}, (error, user) => {
        if (error) {
            console.log('got an error');
            console.log(error)
        } else {
            if(!user) {
                res.status(401).send('Invalid Email')
            } else 
                if (user.Password !== userData.Password) {
                    res.status(401).send('Invalid password')
                } else {
                   // res.status(200).send(user)
                    res.json(user);
                }
            }
    })

})

//Redeming Item
router.post('/redeemItem', (req, res) => {

    let itemData = req.body
    console.log('Item Redeemed');

    Item.findOne({Name: itemData.Name}, (error, item) => {
        if (error) {
            console.log('got an error');
            console.log(error)
        } else {
            if(!item) {
                res.status(401).send('Invalid Item Name')
            } else 
                if (item.PromoCode !== itemData.PromoCode) {
                    res.status(401).send('Invalid PromoCode')
                } else {

                    User.findOne({Id: itemData.Id}, (error, user) => {
                        if (error) {
                            console.log('Oppsie');
                            console.log(error)
                        }
                        else 
                            if(user.Token >= 1) {
                                user.Token = user.Token - 1;
                                console.log('Token taken away');
                                console.log(user.Token);
                                user.save(user.Token);
                                console.log(user);
                        }
                    })
                   
                    res.json(item);
                }
            }
    })

})


//Creating Item
router.post('/additem', (req, res) => {
    let itemData = req.body
    let item = new Item(itemData)
    item.save((error, addedItem) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(addedItem)
        }
    })
})


//List of Items
router.get('/getItems', (req, res) => {
    

    Item.find((error, item) => {
        if(error) {
            console.log(error)
        }
        else {
            res.json(item)
        }
    } )
    
})

//List of Beneficiaries

router.get('/getBene', (req, res) => {
    
    User.find((error, user) => {
        if(error) {
            console.log(error)
        }
        else {
            res.json(user)
        }
    } )
})

module.exports = router;