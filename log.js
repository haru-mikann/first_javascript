let logLists = []
let outlog = []
const log = (addlogComent) => {
    logLists[logLists.length] = addlogComent
}
const mainlog = (logLists) => {
        outlog =String(logLists).replace(/,/g,"\n")
    return outlog
} 