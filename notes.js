const { default: chalk } = require('chalk')
const fs = require('fs')


const AddNote = (title, body) => {
    const notes = LoadNotes()
    const DuplicateNote = notes.find((note) => note.title === title)
    if (!DuplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        SaveNotes(notes)
        console.log(chalk.bgGreen("New note added!"))
    }
    else {
        console.log(chalk.bgRed("Title already taken."))
    }
}


const RemoveNotes = (title) => {
    const notes = LoadNotes()
    const notestokeep = notes.filter((note) => note.title !== title)
    if (notes.length > notestokeep.length) {
        console.log(chalk.bgGreen("Note Removed!"))
        SaveNotes(notestokeep)
    }
    else {
        console.log(chalk.bgRed("No note found!"))
    }
}


const ListNotes = () => {
    console.log(chalk.bold.underline.yellow("Your Notes:"))
    const notes = LoadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}


const ReadNotes = (title) => {
    const notes = LoadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red.inverse("No note Found!"))
    }
}

const SaveNotes = (notes) => {
    const DataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', DataJson)
}


const LoadNotes = () => {
    try {
        const DataBuffer = fs.readFileSync('notes.json')
        const DataJson = DataBuffer.toString()
        return JSON.parse(DataJson)
    } catch (e) {
        return []
    }
}


module.exports = {
    AddNote: AddNote,
    RemoveNotes: RemoveNotes,
    ListNotes: ListNotes,
    ReadNotes: ReadNotes
}