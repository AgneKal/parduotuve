import express, { Application } from 'express';
import { skaiciuokleRouter } from './routes/skaiciuokle.router';
import { corsHeaders } from './middlewares/cors.middleware';
import { productsRouter } from './routes/products.router';
import { authRouter } from './routes/auth.router';
import { userRouter } from './routes/user.router';
import path from 'path';
import { ordersRouter } from './routes/orders.router';

const app:Application=express();

//Sutvarkomi duomenys jei buvo siusta forma
app.use(express.urlencoded({extended: false}));

//Sutvarkomi duomenys jei buvo atsiustas JSON failas
app.use(express.json());

//Sutvarkomi duomenys jei buvo atsiustas failas


app.use(corsHeaders);

// app.get('/products', authMiddleware);
app.use("/img", express.static(path.join("./img") ));

app.use('/skaiciuokle', skaiciuokleRouter);
app.use('/products', productsRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use("/orders", ordersRouter);


export {app};