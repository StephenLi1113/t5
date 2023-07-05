const express = require('express');
const userObj = require('../database/users.js');

const router = express.Router();

//https://upmostly.com/tutorials/how-to-validate-email-addresses-with-ease-in-react
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

router.get("/users", (req, res) => {
    try{
        if(!userObj || !userObj.length)
        {
            return res.status(404).json({success: false, message: "Users not found"});
        }
    }
    catch(err){
            return res.status(500).json({success: false, message: "Internal Server Error"});
    }

    return res.status(200).json({success: true, users: userObj});
});


//GET Request by specified ID
router.get("/users/:id", (req, res) => {

    try{
        //Check whether has users in database
        if(!userObj || !userObj.length)
        {
            return res.status(404).json({success: false, message: "Users not found"});

        }
    }
    catch(err){
            return res.status(500).json({success: false, message: "Internal Server Error"});
    }

    const userID = req.params.id;
    let check = false;

    for(var i = 0; i < userObj.length; i++) 
    {
        if(userObj[i].id === userID)
        {
            check = true;
            return res.status(200).json({message: "User Retrieved", success: true, users: userObj[i]});
        }

    }

    if(check == false)
    {
        return res.status(404).json({success: false, message: "Users not found"});
    }

});


//Put Request
router.put("/update/:id", (req, res) =>{
    const checkID = req.params.id;
    const userInfo = req.body;
    let check2 = false;
    const email = req.body.email;

    try{
        if(!Object.keys(userInfo).length)
        {
            return res.status(400).json({success: false, message: "Missing data body!"});

           // https://stackoverflow.com/questions/60737672/email-regex-pattern-in-nodejs
        }else if(email.length > 0 && !email.match(emailRegex))
        {
            return res.status(400).json({success: false, message: "Email format is incorrect!"});
        }

        
    }catch(err){
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }
    
    for(var i = 0; i < userObj.length; i++) 
    {
        if(userObj[i].id === checkID)
        {
            check2 = true;
            
            if("lastName" in userInfo)
            { 
                userObj[i].lastName = userInfo.lastName;
            }

            if("firstName" in userInfo)
            {
                userObj[i].firstName = userInfo.firstName;
            }

            if("email" in userInfo)
            {
                userObj[i].email = userInfo.email;
            }

            if("title" in userInfo)
            {
                userObj[i].title = userInfo.title;
            }
            
            return res.status(200).json({message: "User Updated", success: true, users: userObj[i]});
        }

    }

    if(check2 == false)
    {
        return res.status(404).json({success: false, message: "Users not found"});
    }
})

//https://www.geeksforgeeks.org/node-js-npm-uuid/
const {v4 : uuidv4} = require('uuid');
//Post request
router.post("/add", (req, res) =>{
    const newUser = req.body;
    const id = uuidv4(); 
    const email1 = req.body.email;

    try{
        if(!Object.keys(newUser).length)
        {
            return res.status(400).json({success: false, message: "Missing data body "});

        }else if(email1.length > 0 && !email1.match(emailRegex))
        {
            return res.status(400).json({success: false, message: "Email format is incorrect!"});
        }
    }catch(err){
        return res.status(500).json({success: false, message: "Internal Server Error"});
    }

    newUser.id = id;
    userObj.push(newUser);
    return res.status(200).json({message: "User Added", success: true, users: userObj[userObj.length - 1]});

})

module.exports = router;

//https://stackoverflow.com/questions/42033209/how-to-get-id-from-url-as-variable-in-node-js
//https://www.youtube.com/watch?v=JTr2gQoUDnk
//https://www.youtube.com/watch?v=mGPj-pCGS2c
//https://stackoverflow.com/questions/42921727/how-to-check-req-body-empty-or-not-in-node-express