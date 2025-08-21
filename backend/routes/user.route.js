import express, { Router } from 'express'
//import {Router} from 'express'
import userdata from '../controllers/user.controller.js'

const router = Router()

router.post("/formdata",userdata)

export default router
