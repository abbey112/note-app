const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'i pray i get this'
}

const addNotes = function ( title, body) {
    notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added')
    } else {
        console.log('note title taken')
    }
}
const removeNote = function(title) {
    const notes = loadNotes()
     const noteToKeep = notes.filter(function(note) {
        return note.title !== title
    })

    if  (notes.length > noteToKeep.length) {
        console.log(chalk.green.inverse('Note deleted'))
        saveNotes(noteToKeep)
    } else {
        console.log(chalk.red.inverse('No Note found'))
    }
    
}
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
     const dataBuffer = fs.readFileSync('notes.json')
     const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote
}