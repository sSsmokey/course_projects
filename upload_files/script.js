

var upload_cloud = document.querySelector(".skin.active")

var input = document.querySelector(".skin input")

var text = document.querySelector(".skin p")


// when skin clicked click input
upload_cloud.addEventListener("click",()=>{
    if (upload_cloud.classList.contains("active")){
        input.click()
        input.removeAttribute("disabled")
    }
})

// input.value =  C:\fakepath\cv.pdf

// when input is filled display value and give style white
input.oninput = ()=>{
    if (upload_cloud.classList.contains("active")){
            
            upload_cloud.classList.remove("active")
            text.innerText = input.value.split("fakepath")[1].slice(1,) 
            text.innerHTML += `<img onclick="closing()" src="src/close.png">`
            text.style.color = "white"
            upload_cloud.classList.add("disabled")
    }

}



function closing(){
    input.value = ""
    var img = document.querySelector(".skin img")
    text.innerText = "Click here to upload files ..."
    text.style.color = " var(--blue)"
    upload_cloud.classList.add("active")
    upload_cloud.classList.remove("disabled")
    input.setAttribute("disabled","")
}
