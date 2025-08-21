import express, { Router } from 'express'
//import {Router} from 'express'
import  { userdata, updateuser, deleteuser } from '../controllers/user.controller.js'

const router = Router()

router.post("/formdata",userdata)
router.put("/updateuser/:id",updateuser)
router.delete("/deleteuser/:id", deleteuser)

export default router
