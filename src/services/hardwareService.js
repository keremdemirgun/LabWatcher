import systeminformation from 'systeminformation';

async function cpuData() {
    try {
        const data = await systeminformation.cpu();
        console.log('CPU Information:');
        console.log('- manufacturer: ' + data.manufacturer);
        console.log('- brand: ' + data.brand);
        console.log('- speed: ' + data.speed);
        console.log('- cores: ' + data.cores);
        console.log('- physical cores: ' + data.physicalCores);
    } catch (e) {
        console.log(e)
    }
}

async function getRamInfo() {
    try {
        const data = await systeminformation.mem();
        console.log('RAM Information:');
        console.log('- Free Space: ' + data.free);
        console.log('- Total Size: ' + data.total);
    } catch (e) {
        console.log(e)
    }
}

getRamInfo();