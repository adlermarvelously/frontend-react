// XHR ile "https://jsonplaceholder.typicode.com/" URL'ini kullanarak users adresine birer adet get, post, patch, put ve delete isteği gönderin.


const jsonPlaceholderUrl = "https://jsonplaceholder.typicode.com/"

const getRequest = (callbackFn, endpoint) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if(request.readyState === 4 && request.status === 200){
           const data = JSON.parse(request.responseText)
           callbackFn(null, data)
        } else if ( request.readyState === 4) {
            callbackFn(`${request.status} - Couldn't fetch the data`, null)
        }
    })
    request.open("GET", endpoint)
    request.send()
}

getRequest( (error, response) => {
    if(error){
        console.log(error);
    } else {
        console.log(response);
    }
}   , "https://jsonplaceholder.typicode.com/users")

const get = (url, cb) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.send()
    console.log("deneme 1");
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200) {
                const response = JSON.parse(xhr.responseText)
                cb(null, response)
            } else {
                cb("Hata: " + xhr.status, null)
            }
        }
        console.log("deneme 2");
    }
    console.log("deneme 3");
}

get(`${jsonPlaceholderUrl}users`, (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})