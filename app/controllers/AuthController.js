const User = require('../models/User');
const bcrypt = require('bcrypt');
const CONFIG = require('../config/config');

const jwt = require('jsonwebtoken');

//Username
//Password

function login(req,res){
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({username})
        .then(user => {
            if(!user) return res.status(404).send({message: 'EL USUARIO NO EXISTE'});
            bcrypt.compare(password,user.password)
                  .then(match => {
                        if(match){
                            payload = {
                                username: user.username,
                                email: user.email,
                                name: user.name,
                                role: user.role
                            }
                            //Acceso
                            jwt.sign(payload,CONFIG.SECRET_TOKEN,function(error,token){
                                if(error){
                                    res.status(500).send({error});
                                }else{
                                    res.status(200).send({message: 'Acceso',token});
                                }
                            })
                        }else{
                            //No doy Acceso
                            res.status(200).send({message: 'PASSWORD INCORRECTA'});
                        }
                  }).catch(error => {
                    console.log(error);
                    res.status(500).send({error});
                  });
        }).catch(error => {
            console.log(error);
            res.status(500).send({error});
        });
}

module.exports = login;