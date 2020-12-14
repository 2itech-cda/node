const events = require('events');
const dataEvent = new events.EventEmitter();

// À l'écoute...
dataEvent.on('change', (name, age, obj) => {
    console.log('data was changed', name, age, obj);
});

// On emet un évenement...
dataEvent.emit('change', 'toto', 50, {test: 'testing'});

class PhotoResizer {
    constructor() {
        this.resizeEvent = new events.EventEmitter();
    }
    done(callback) {
        this.resizeEvent.on('done', callback);
    }
    resize() {
        setTimeout(() => {
            console.log('long task done');
            this.resizeEvent.emit('done');
        }, 3000);
    }
}

console.log('Démarrage du programme');
const photoResizer = new PhotoResizer();

photoResizer.done(() => {
    console.log('Photo was resized');
});

photoResizer.resize();
console.log('Fin du programme');