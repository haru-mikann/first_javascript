let logLists = []
let outlog = []
const log = (addlogComent) => {
    logLists = [...logLists ,addlogComent]
}
const mainlog = (logLists) => {
        outlog =String(logLists).replace(/,/g,"\n")
        // for(let j = 0; logLists == j; j++){
        //     document.getElementById("syslog").appendChild("div") = logLists[j]
        // }
    return outlog
} 
