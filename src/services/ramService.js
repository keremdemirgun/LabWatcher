import si from 'systeminformation';
import express from 'express';

const router = express.Router();



async function getRamUsage() {
    const data = await si.mem();
    return {
        total: data.total,
        free: data.free
    };
}


// console.log(`Result: ${cpuResult}%`);

router.get("/usage", async (req, res) => {
    
    const ramUsage = await getRamUsage();
    res.json(ramUsage);
    

});


export default router;