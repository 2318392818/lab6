import { EventEmitter } from 'events';
const myEmitter = new EventEmitter();
function greetHandler(name) 
    {
        console.log('Hello ' + name);
    }
    function goodbyeHandler(name) 
    {
        console.log('Goodbye ' + name);
    }
    myEmitter.on('greet', greetHandler);
    myEmitter.on('goodbye', goodbyeHandler);
    myEmitter.emit('greet', 'John'); 
    myEmitter.emit('goodbye', 'John'); 
    myEmitter.on('error', (err) => {
        console.log('An Error Occured:', err);
        });
        myEmitter.emit('error', new Error('Something went wrong'));