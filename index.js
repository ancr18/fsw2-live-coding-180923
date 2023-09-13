const { Console } = require('console')
const fs = require('fs')
const http = require('http')
const path = require('path')
const url = require('url')
// menggunakan synchronous
// const textIn = fs.readFileSync('txt/read-this.txt', 'utf-8')
// console.log(textIn)

// const textOut =  `ini tuh penjelasan tentang alpukat di bahasa inggris : ${textIn}`
// fs.writeFileSync('txt/output-penjelasan.txt', textOut)
// console.log('sukses nyetaknya coooy')


// menggunakan asynchronous

// membaca file
// const test = fs.readFile('txt/start.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })


// const dataRf = fs.readFile('txt/start.txt', 'utf-8', (err, data) => {
//     fs.readFile(`txt/${data}.txt`, 'utf-8', (err, data2) => {
//         if (err) throw err;
//         console.log(data2)
//     })
// })

// const dataWr = fs.readFile('txt/start.txt', 'utf-8', (err, data) => {
//     fs.readFile(`txt/${data}.txt`, 'utf-8', (err, data2) => {

//         fs.writeFile('txt/gabungan.txt', `${data}/n${data2}` , err => {
//             if(err) throw err;
//             console.log('sukses gabung bro')
//         })
//     })
// })




// console.log('FSW 2 ?')

// writeFile tp hasil gabungan dari read-this.txt sama final.txt

// const dataWr = fs.readFile('txt/start.txt', 'utf-8', (err, data) => {
//     fs.readFile(`txt/${data}.txt`, 'utf-8', (err, data2) => {
//         fs.readFile(`txt/final.txt`, 'utf-8', (err, data3) => {
//             fs.writeFile('txt/gabungan2.txt', `${data2}/n${data3}` , (err) => {
//                 if(err) throw err;
//                 console.log('sukses gabung bro')
//             })
//         })       

//     })
// })


// SERVER dengan HTTP
const server = http.createServer((req, res) => {
    const pathName = req.url;

    // membuat url /hello
    if(pathName === '/hello'){
        res.end('ini hello ke fsw 2')
        console.log(`${__dirname}`);
    } 
    
    // membuat url /product
    else if(pathName === '/product'){
        res.end(JSON.stringify({
            data : 'Halo Bang ini product'
        }))
    } 

    // membuat url /api
    else if(pathName === '/api'){
        const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
        res.writeHead(200,{
            'Content-type' : 'application/json'
        })
        res.end(data)
    } 
    
    // membuat url /overview
    else if(pathName === '/overview'){
        const overViewPage = fs.readFileSync(`${__dirname}/templates/overview.html`);
        res.writeHead(200,{
            'Content-type' : 'text/html'
        })  
        res.end(overViewPage)
    }

    // membuat jika tidak ada url nya
    else{
        res.writeHead(404, {
            'Content-type' : 'text/html'
        })
        res.end('<h1>URL ini gak ada apa2 broo</h1>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Server jalan bang')
})