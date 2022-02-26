// Anda juga bisa secara manual menyimpan nilai di dalam process.
// env. Hal ini berguna untuk menentukan alur code seperti if-else 
// dalam program berdasarkan environment yang Anda berikan. 
// Contohnya, ketika Anda ingin nilai variabel host berbeda di 
// kala pengembangan (development) dan produksi (production), 
// Anda bisa membuat properti NODE_ENV pada process.env. Jadi, 
// Anda bisa menentukan nilai host berdasarkan kondisi NODE_ENV.

// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });

// const cpuInformation = process.memoryUsage(); //Anda dapat mengakses informasi tersebut melalui fungsi process.memoryUsage().
 
// console.log(cpuInformation);


const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);