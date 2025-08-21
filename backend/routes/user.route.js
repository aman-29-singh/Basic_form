import express, { Router } from 'express'
//import {Router} from 'express'
import  { userdata, updateuser } from '../controllers/user.controller.js'

const router = Router()

router.post("/formdata",userdata)
router.put("/updateuser/:id",updateuser)

export default router
