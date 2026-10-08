import express from 'express';
import { fileURLToPath } from 'url';
import cpuService from './services/cpuService.js';
import ramService from './services/ramService.js';

const app = express();
const port = process.env.PORT || 3000;


app.use("/cpu", cpuService);
app.use("/ram", ramService);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

