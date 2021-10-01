const{validationResult}= require('express-validator');
const bcrypt= require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const User = db.Users;

module.exports = {
    register: (req, res) => {
        res.render('users/register',{
            session: req.session,
            title: "¡Registrate!"
        });
    }, 
    processRegister: (req, res) => {     
        let errors = validationResult(req);

        if (req.fileValidatorError) {
            let image = {
                param: "image",
                msg: req.fileValidatorError,
            };

            errors.push(image);
        }

        if (errors.isEmpty()) {
            let { name, lastName, phone, email, pass1 } = req.body;

            User.create({
                name,
                lastName,
                phoneNumber: phone,
                email,
                password: bcrypt.hashSync(pass1, 10),
                avatar: req.file? req.file.filename : "default-image.png",
                rol: 0,
            }).then(() => res.redirect("users/login"));

        } else {
            res.render("users/register", {
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
            });
        }
    },
    login: (req, res) => {        
        res.render('users/login', {
            session: req.session
        });
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            User.findOne({
                where: { email: req.body.email },
            }).then(user => {
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    last_name: user.last_name,
                    phone: user.phone,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.rol,
                };

                if (req.body.remember) {
                    res.cookie("niceSweet", req.session.user, {
                        expires: new Date(Date.now() + 900000),
                        httpOnly: true,
                        secure: true,
                    });
                }

                res.locals.user = req.session.user;           
                res.redirect("/");
            });
        } else {
            res.render("users/login", {
                errors: errors.mapped(),
                session: req.session,
            });
        }
    },
    profile: (req, res) => {     
        User.findByPk(req.session.user.id)
        .then(user => {
              res.render("users/profile", {
                user,
                session: req.session
              });
        });
    },
    editProfile: (req, res) => {
        User.findByPk(req.params.id)
        .then(user => {
            res.render("users/edit", {
                user,
                session: req.session,
            });
        });
    },
    updateProfile: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let { name, lastName, phone } = req.body;
            
            User.update({
                name,
                lastName,
                phoneNumber: phone,
                avatar: req.file && req.file.filename,
            }, { where: { id: req.params.id } })
            .then(() => res.redirect("/users/profile"));

        } else {
            res.render("users/edit", {
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
            });
        }
    },
    logout: (req, res) =>{
        req.session.destroy();
        
        if(req.cookies.userNiceSweet){
            res.cookie('userNiceSweet','',{maxAge: -1})
        }
        
        return res.redirect('/')
    },
};