export function addToLocalStorage(key:any, value:any){
    if (typeof value === "object"){
        localStorage.setItem(key, JSON.stringify(value));
    }else{
        localStorage.setItem(key, value);
    }
}

function getFromLocalStorage(key:any) {
    let  value = localStorage.getItem(key);
    if (!value){
        return null;
    }

    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
}

function updateLocalStorage(key:any, updatedValue:any) {
    let  value = localStorage.getItem(key);
    if (!value){
        return null;
    }

    try {
        localStorage.setItem(key, updatedValue);
    } catch (error) {
        return value;
    }
}
function removeFromLocalStorage(key:any){
    localStorage.removeItem(key);
}


const methods = {
    addToLocalStorage,
    getFromLocalStorage,
    updateLocalStorage,
    removeFromLocalStorage
}

export default methods;