const express=require('express');
const router=express.Router();
const userController=require('./../controllers/controller');

router.route('/')
    .get(userController.getUsers)
    .post(userController.postUser);