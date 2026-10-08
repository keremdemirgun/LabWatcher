import systeminformation from 'systeminformation';
import express from 'express';

const router = express.Router();



function getCpuDataAverage() {
    return new Promise((resolve, reject) => {
        let toplam = 0;
        let olcumSayisi = 0;

        const intervalId = setInterval(async () => {
            try {
                const data = await systeminformation.currentLoad();

                toplam += data.currentLoad;
                olcumSayisi++;

                if (olcumSayisi === 5) {
                    clearInterval(intervalId);

                    const ortalama = toplam / olcumSayisi;
                    const fixedOrtalama = ortalama.toFixed(2);

                    // promise ok
                    resolve(Number(fixedOrtalama)); 
                }
            } catch (error) {
                clearInterval(intervalId); 
                reject(error);
            }
        }, 1000);
    });
}


// console.log(`Result: ${cpuResult}%`);

router.get("/average", async (req, res) => {
    
    const cpuResult = await getCpuDataAverage();
    res.json(cpuResult);
    

});


export default router;