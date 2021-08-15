const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'adding a note',
    builder: {
        title: {
            describe: ' Notes tittle',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: ' Body tittle',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
      notes.addNotes(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: ' removing tittle',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
      notes.removeNote(argv.title)
    }
})

yargs.parse()