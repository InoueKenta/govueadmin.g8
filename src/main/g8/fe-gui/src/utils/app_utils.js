function localStorageGet(key) {
    return localStorage.getItem(key)
}

function localStorageGetAsInt(key) {
    let str = localStorage.getItem(key)
    if (str == null) {
        return 0
    }
    return Number.parseInt(str, 10)
}

function localStorageSet(key, value) {
    return localStorage.setItem(key, value)
}

function getUnixTimestamp() {
    return Math.round((new Date()).getTime() / 1000)
}

export default {
    localStorageGet,
    localStorageSet,
    localStorageGetAsInt,
    getUnixTimestamp,
}