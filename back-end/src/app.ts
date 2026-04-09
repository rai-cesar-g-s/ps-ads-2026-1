import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index'


const app = express()

import cors from 'cors'

app.use(cors({
 origin: process.env.ALLOWED_ORIGINS.split(','),
 // credentials: true   // Habilita o envio de cookies para o front-end
}))

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

/**************** ROTAS *******************/


// Middleware de verificação de autorização

import customersRoute from './routes/customers.js'
app.use('/customers', customersRoute)

import carsRoute from './routes/cars.js'
app.use('/cars', carsRoute)

import usersRoute from './routes/users.js'
app.use('/users', usersRoute)

import sellerRoute from './routes/sellers.js'
app.use('/sellers', sellerRoute)

export default app
