let chalk = require('chalk')
const { describe, argv, demandOption } = require('yargs')
let yargs = require('yargs')
let notes = require('./notes.js')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.AddNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remave a note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv)
    {
        notes.RemoveNotes(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Lists a note',
    handler()
    {
        notes.ListNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv)
    {
        notes.ReadNotes(argv.title)
    }
})

yargs.parse();