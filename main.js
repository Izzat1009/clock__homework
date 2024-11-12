const timeEl = document.querySelector(".time")

function getTime(){
    let date = new Date()

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let timeView = `${hour}:${minute}:${second}`

    timeEl.innerHTML = timeView

}
getTime()



setInterval( ()=>{
    console.log("refresh");
    getTime()
},1000)

const dateEl = document.querySelector(".day")

function getDate(){
    let date = new Date()

    let hour = date.getDate()

    let dateView = `${day}`

    timeEl.innerHTML = dateView
}
getDate()


setInterval( ()=>{
    console.log("refresh");
    getDate()
}



),86400