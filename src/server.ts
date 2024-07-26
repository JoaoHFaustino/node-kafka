import express, { json } from 'express';
import ordersRoutes from './routes/orders-routes';

const app = express();
const port = 3000;

app.use(json());
app.use(ordersRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});