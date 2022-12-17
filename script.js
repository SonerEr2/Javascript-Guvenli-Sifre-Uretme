
const getRandomLover=()=>{
    return String.fromCharCode(Math.floor(Math.random()*26+97))

}
const getRandomUpper=()=>{
    return String.fromCharCode(Math.floor(Math.random()*26+65))

}
const getRandomNumber=()=>{
    return String.fromCharCode(Math.floor(Math.random()*10+48))

}

const getRandomSymbol=()=>{
    const symbols='!^+%&/('
    return symbols[Math.floor(Math.random()*symbols.length)]
}

const randomFunction= {getRandomLover,getRandomNumber,getRandomUpper,getRandomSymbol}

const generatePassword=()=>{
    const length=60;
    let generatePassword="";

    for(let x=0; x<length;x++)
    generatePassword+=Object.values(randomFunction)[Math.floor(Math.random()*4)]()

    return generatePassword
}

const spanResult=document.getElementById("result");
const generateButton=document.getElementById("generate")
const clipboardButton=document.getElementById("clipboard")

generateButton.addEventListener("click",()=>{
    spanResult.innerHTML=generatePassword();
})

clipboardButton.addEventListener("click",()=>{
    const password=spanResult.innerText;
    if(!password)
    return

    const textarea=document.createElement("textarea")
    textarea.value=password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
})
