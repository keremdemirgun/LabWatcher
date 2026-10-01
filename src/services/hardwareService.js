import systeminformation from 'systeminformation';

async function cpuData() {
    try {
        let toplam = 0;
        let olcumSayisi = 0;

        const intervalId = setInterval(async () => {
            const data = await systeminformation.currentLoad();

            toplam += data.currentLoad;
            olcumSayisi++;

            if (olcumSayisi === 5) {
                clearInterval(intervalId);

                const ortalama = toplam / olcumSayisi;
                console.log(`Average CPU Usage: ${ortalama.toFixed(2)}%`);
            }
        }, 1000);
        // console.log('CPU Usage: ' + data.currentLoad.toFixed(2) + '%');

    } catch (e) {
        console.log(e)
    }
}

async function getRamInfo() {
    try {

        let toplam = 0;
        let olcumSayisi = 0;

        const intervalId = setInterval(async () => {
            const data = await systeminformation.mem();

            toplam += data.currentLoad;
            olcumSayisi++;

            if (olcumSayisi === 5) {
                clearInterval(intervalId);

                const ortalama = toplam / olcumSayisi;
                console.log(`RAM Usage: ${ortalama.toFixed(2)}%`);
            }
        }, 1000);
        

        const data = await systeminformation.mem();
        console.log('RAM Information:');
        console.log('- Free Space: ' + data.free);
        console.log('- Total Size: ' + data.total);
    } catch (e) {
        console.log(e)
    }
}

// cpuData();
cpuData();