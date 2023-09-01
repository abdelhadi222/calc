const afiche = document.querySelector(".afiche")
const tabOFmath = document.querySelectorAll(".oneMath  div")
const tabOfcalc = document.querySelectorAll('.calc div ')




function  clk(params) {
tabOfcalc.forEach((el)=>{
    el.onclick =()=>{
        let  y = el.innerHTML
     afiche.innerHTML = afiche.innerHTML + y
    }

})
}
clk()




 document.querySelector(".sup").onclick =()=>{
    afiche.innerHTML = ""
}

 document.querySelector(".rand").onclick =()=>{
    afiche.innerHTML =  afiche.innerHTML + +Math.random()
}

 document.querySelector(".p").onclick =()=>{
    afiche.innerHTML = afiche.innerHTML  +"3,141592653589793"
}

 document.querySelector(".lft").onclick =()=>{
    afiche.innerHTML = afiche.innerHTML + "("
}
 document.querySelector(".righ").onclick =()=>{
    afiche.innerHTML = afiche.innerHTML + ")"
}
 document.querySelector(".e").onclick =()=>{
    afiche.innerHTML = afiche.innerHTML + "2,71828"
}



 document.querySelector(".aqu").onclick =()=>{
     let ay = afiche.innerText.split("")
     let o = ay.pop()
    afiche.innerHTML = eval(afiche.innerText)
     document.querySelector(".aqu").onclick = ()=>{
       afiche.innerHTML = afiche.innerText * o
     }
}




 document.querySelector(".del").onclick =()=>{
    afiche.innerHTML = afiche.innerText.slice(0,-1)
}


document.querySelector(".fact").onclick =()=>{
    afiche.innerHTML = f(afiche.innerText)
}

function f(t) {
    let y =1
    for(let i=1;i<=t;i++){
       y*=i
    }
    return y
}

 
document.querySelector('.i span').onclick = (()=>{
    afiche.innerHTML = 1/afiche.innerText
})

document.querySelector('.gh span').onclick = (()=>{
    afiche.innerHTML = 2*afiche.innerText
})

document.querySelector('.X2 span').onclick = (()=>{
    afiche.innerHTML = afiche.innerText * afiche.innerText 
})

document.querySelector('.X3 span').onclick = (()=>{
    afiche.innerHTML = afiche.innerText * afiche.innerText * afiche.innerText
})
document.querySelector('.X span').onclick = (()=>{
    afiche.innerHTML = Math.pow(10,afiche.innerText)
})
document.querySelector('.sqrt2 span').onclick = (()=>{
    afiche.innerHTML = Math.sqrt(afiche.innerText)
})
document.querySelector('.sqrt3 span').onclick = (()=>{
    afiche.innerHTML = Math.sqrt(afiche.innerText)
})
document.querySelector('.ln span').onclick = (()=>{
    afiche.innerHTML = Math.log(afiche.innerText)
})

document.querySelector('.log span').onclick = (()=>{
    afiche.innerHTML = Math.log2(afiche.innerText)
    
})
document.querySelector('.cos span').onclick = (()=>{
    afiche.innerHTML = Math.cos(afiche.innerText)
    
})
document.querySelector('.cosh span').onclick = (()=>{
    afiche.innerHTML = Math.cosh(afiche.innerText)
    
})

document.querySelector('.sin span').onclick = (()=>{
    afiche.innerHTML = Math.sin(afiche.innerText)
    
})
document.querySelector('.sinh span').onclick = (()=>{
    afiche.innerHTML = Math.sinh(afiche.innerText)
    
})
document.querySelector('.tan span').onclick = (()=>{
    afiche.innerHTML = Math.tan(afiche.innerText)
    
})
document.querySelector('.tanh span').onclick = (()=>{
    afiche.innerHTML = Math.tanh(afiche.innerText)
    
})





















    
   


  
 
    



