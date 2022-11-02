let logLists = []
const log = (addlogComent) => {
    document.getElementById("syslog").appendChild(document.createElement("div")).textContent = addlogComent

    logLists = [...logLists , addlogComent]
}
