//Assertion testing: Assert modules
const assert = require('assert');
// let a = 5;
// let b = 3;
// let correct = (a < b);
// console.log (correct);//false


// let m = 5;
// let n = 3;
// let corr = assert( m < n );

// console.log(corr);//throw an assert error and end program

//assert.deepEqual()   and assert.deepStrictEqual();

// const x = { a : { n: 0 } };
// const y = { a : { n: 0 } };
// const z = { a : { n: 1 } };
// assert.deepEqual(x, y); //OK

// assert.deepStrictEqual(x,y);

// assert.deepEqual(x, z);//AssertionError 

// assert.deepStrictEqual(x,z);

//assert.fail()

assert.fail(new TypeError('This is why I failed'));




























//console  module
// console.log('This is console log');


// console.error(new Error("This is error console") );
// console.clear();

// console.warn("This is warning console");
// console.count("Console count");
// console.count('Console count');
// console.count('Console count');


// console.assert(true, "does nothong");

// console.assert(false, 'Whoops %s work', 'didn\'t');
// console.assert();
// console.group();
// console.debug("This is debug console");//same: console.log()
// console.info("This is info console");// same: console.log()

// console.table([{a:1, b:'A'}, {a:2, b:'B'}]);


// Path already done

// os module

// const os = require('os');
// console.log(os.cpus());

// console.log(os.freemem());

// console.log(os.homedir());


// console.log(os.hostname());


// console.log(os.loadavg());

// console.log(os.networkInterfaces());

// console.log(os.release());

// console.log(os.type());

// console.log(os.totalmem());

// console.log(os.uptime());

// console.log(os.version());

// Globals


// const ac = new AbortController();

// ac.signal.addEventListener('abort', () => console.log('Aborted!'), { once: true });

// ac.abort();

// console.log(ac.signal.aborted); //true

// const ac = new AbortController();

// ac.signal.onabort = () => console.log('aborted!');


// ac.signal.addEventListener('abort', (event) => {
//   console.log(event.type);  
// }, { once: true });

// ac.abort();


// CommonJS modules

// const Circle = require('./circle.js');
// const myCircle = new Circle(4);
// console.log(`The area of myCircle is ${myCircle.area()}`);


// console.log('mudule starting');
// const a = require('./a.js');
// const b = require('./b.js');
// console.log('in mudule, a.done = %j, b.done = %j', a.done, b.done);


// Timers modules


//setTimeout()

// function myFunc(arg){
//     console.log(`arg is=> ${arg}`);
// }
// setTimeout(myFunc, 2000, 'funky');


// setImmediate()

// console.log('before immediate');

// setImmediate((arg) => {
//     console.log(`executing immediate: ${arg}`);
// },'so immediate');

// console.log('after immediate');

//setInterval()

// function intervalFunc(){
//     console.log('Hello world!!!');
// }

// setInterval(intervalFunc, 2000);


//clearTimeout(), clearImmediate(), clearInterval()

// const timeoutFunc = setTimeout(()=>{
//     console.log(('timeout beyond time'));
// }, 2000);

// const immediateFunc = setImmediate (()=>{
//     console.log('immediately executing immediate');
// });

// const intervalFunc = setInterval(() => {
//     console.log('interviewing the interval');
// }, 2000);

// clearTimeout(timeoutFunc);
// clearImmediate(immediateFunc);
// clearInterval(intervalFunc);


// const timerObj = setTimeout(() => {
//     console.log('will i run?');
//   });
 
//   timerObj.unref();
  
//   setImmediate(() => {
//     timerObj.ref();
//   });



//Error modules

// try ... catch  error

// const fs = require('fs');

// try {
//     const data = fs.readFileSync('/Users/Kedar/node.txt')
  
// } catch ( err ) {
//     console.log( err );
// }
// console.log('an important piece of code that should be run at the end ');


// // callback error

// const fs = require('fs');
// const file = 'file.txt';

// const errorCallback = ( err, data ) =>{
//     if(err){
//         return console.log(err);
//     }
//     console.log('Function successfully executed');
// };
// fs.readFile( file, errorCallback);


// promise error

// const udf_double = num => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (typeof num !== 'number') {
//           reject(new TypeError(`Expected number, got: ${typeof num}`));
//         }
  
//         const result = num * 2;
//         resolve(result);
//       }, 100);
//     });
//   }
//   udf_double('8')
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

// async/await
// const fs = require('fs');
// const util = require('util');

// const readFile = util.promisify(fs.readFile);

// const read = async () => {
//   try {
//     const result = await readFile('/home/Kedar/node.txt');
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }
// };

// read()

//URL modules

// const myURL = new URL('https://example.org');
// myURL.pathname = '/a/b/c';
// myURL.search = '?d=e';
// myURL.hash = '#fgh';
// console.log(myURL.href);

//url.hash
// const myURL = new URL('https://example.org/foo#bar');
// console.log(myURL.hash);

// myURL.hash = 'baz';
// console.log(myURL.href);

// //url.host
// const myURL1 = new URL('https://example.org:81/foo');
// console.log(myURL1.host);


// myURL1.host = 'example.com:82';
// console.log(myURL1.href);

// //url.hostname
// const myURL2 = new URL('https://example.org:81/foo');
// console.log(myURL2.hostname);

// //url.href
// const myURL = new URL('https://example.org/foo#bar');
// console.log(myURL.href);

// //url.origin
// const myURL3 = new URL('https://example.org/foo#bar');
// console.log(myURL3.href);

// //url.password
// const myURL4 = new URL('https://abc:xyz@example.com');
// console.log(myURL4.password);

// //url.pathname
// const myURL5 = new URL('https://example.org/abc/xyz?123');
// console.log(myURL5.pathname);

//url.port
// const myURL = new URL('https://example.org:8888');
// console.log(myURL.port);  //  8888


// myURL.port = '443';
// console.log(myURL.port);  //  empty string
// console.log(myURL.href);  //  https://example.org/

// myURL.port = 1234;
// console.log(myURL.port);  //  1234
// console.log(myURL.href);  // https://example.org:1234/


// myURL.port = 'abcd';
// console.log(myURL.port); //  1234


// myURL.port = '5678abcd';
// console.log(myURL.port); // 5678


// myURL.port = 1234.5678;
// console.log(myURL.port); //  1234


// myURL.port = 1e10; 
// console.log(myURL.port); //  1234


//url.protocol

// const myURL = new URL('https://example.org');
// console.log(myURL.protocol); // https:

// myURL.protocol = 'ftp';
// console.log(myURL.href); // ftp://example.org/

//url.search
// const myURL = new URL('https://example.org/abc?123');
// console.log(myURL.search);// ?123

// myURL.search = 'abc=xyz';
// console.log(myURL.href);// https://example.org/abc?abc=xyz


//Events modules

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('saved', () => {
//     console.log(`A saved event occurred.`);
// });

// emitter.emit('saved');


//Emit an event with arguments

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('saved',  (arg) => {
//     console.log(`A saved event occurred: name: ${arg.name}, id: ${arg.id}`);
// });

// emitter.emit('saved', {
//     id: 1,
//     name: 'John Doe'
// });

//Detach an event listener

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// // declare the event handler
// function log(arg) {
//     console.log(`A saved event occurred, name: ${arg.name}, id: ${arg.id}`);
// }

// // attach the event listener to the saved event
// emitter.on('saved', log);

// // emit the saved event
// emitter.emit('saved', {
//     id: 1,
//     name: 'John Doe'
// });

// // remove the event listener
// emitter.off('saved', log);

// // no effect
// emitter.emit('saved', {
//     id: 2,
//     name: 'Jane Doe'
// });

// emitter.eventNames()

// const EventEmitter = require('events');
// const myEE = new EventEmitter();
// myEE.on('foo', () => {});
// myEE.on('bar', () => {});

// const sym = Symbol('symbol');
// myEE.on(sym, () => {});

// console.log(myEE.eventNames());//[ 'foo', 'bar', Symbol(symbol) ]


//events.listenerCount()
// const { EventEmitter, listenerCount } = require('events');

// const myEmitter = new EventEmitter();

// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});

// console.log(listenerCount(myEmitter, 'event'));//5


//Buffer modules

//buffer.alloc()

// const buff = require('buffer');

// const buf =  Buffer.alloc(6);
// console.log(buf);

// //buffer.byteLength()

// const buff1 = Buffer.alloc(8);
// const buffLen =Buffer.byteLength(buff1);
// console.log(buffLen);//8

//buffer.compare()
// const buf1 = Buffer.from('abc');
// const buf2 = Buffer.from('abc');
// const x1 = Buffer.compare(buf1, buf2);
// console.log(x1);//0 ,  they are equal

// const buf3 = Buffer.from('a');
// const buf4 = Buffer.from('b');
// const x2 = Buffer.compare(buf3, buf4);
// console.log(x2);//-1, buf3 is lower than buf4

// const buf5 = Buffer.from('b');
// const buf6 = Buffer.from('a');
// const x3 = Buffer.compare(buf5, buf6);
// console.log(x3);//1, buf5 is higher than buf6


// const buf1 = Buffer.from('b');
// const buf2 = Buffer.from('c');
// const buf3 = Buffer.from('a');
// const arr = [buf1, buf2, buf3];

// //The array before sorting:
// console.log(arr);//[ <Buffer 62>, <Buffer 63>, <Buffer 61> ]

// //Sort the array:
// console.log(arr.sort(Buffer.compare));//[ <Buffer 61>, <Buffer 62>, <Buffer 63> ]



// buffer.concat

// const buf1 = Buffer.from('a');
// const buf2 = Buffer.from('b');
// const buf3 = Buffer.from('c');
// const arr = [buf1, buf2, buf3];


// const buf = Buffer.concat(arr);
// console.log(buf);//<Buffer 61>, <Buffer 62>, <Buffer 63>

//buf.entries

// const buf = Buffer.from('abc');

// for(x of buf.entries()){
//     console.log(x);
// }

//Buffer.fill()
// const b = Buffer.alloc(10).fill('a');
// console.log(b.toString());//aaaaaaaaaa

// const b1 = Buffer.alloc(10).fill(1);
// console.log(b1.toString());//☺☺☺☺☺☺☺☺☺☺

// const b2 = Buffer.alloc(10).fill(1);
// console.log(b2);//<Buffer 01 01 01 01 01 01 01 01 01 01>


//Buffer.from()

//const mybuff = Buffer.from("Nigeria");

//console.log(mybuff);// <Buffer 4e 69 67 65 72 69 61>


// Create buffer from the first buffer created
// const buff = Buffer.from(mybuff);

// console.log(buff);//<Buffer 4e 69 67 65 72 69 61>

// // create a buffer from an array
// const buf1 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
// console.log(buf1);//<Buffer 62 75 66 66 65 72>

//buff.includes()

// const buf = Buffer.from('this is a buffer');
// console.log(buf.includes('this'));//true

// console.log(buf.includes('a buffer example'));//false

//Buffer.isEncoding()

// console.log(Buffer.isEncoding('hex'));// true

// console.log(Buffer.isEncoding('utf-8'));// true

// console.log(Buffer.isEncoding('utf/8'));//false

// console.log(Buffer.isEncoding('hey'));// false

//Buffer.slice()

// const a = Buffer.from('uvwxyz');
// const b = a.slice(2,5);
// console.log(b.toString());// wxy