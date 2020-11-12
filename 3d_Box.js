function faceColor (){
    let hexCode = "ABCDEF0123456789"
    let hex = "#"

    document.querySelectorAll(".face").forEach( face => {
            for (let i = 0; i<6; i++){
                let randomCharacter = hexCode[Math.floor(Math.random() * hexCode.length)]
                hex = hex + randomCharacter
            }
            face.style.backgroundColor = hex
            hex = "#"
    })
    
}
faceColor()


function rotateBox (){
    let userOptions = document.querySelectorAll(".option")
    let mainBox = document.querySelector(".main-box-top").querySelector(".box")
    let rotateDeg = 0;
    let rotation;

    function setRotationInterval (rotateAngle, degree){
        
        if (rotation){
            clearInterval(rotation)
        }

        rotation = setInterval(() => {
            rotateDeg = rotateDeg + 1
            mainBox.style.transform = `${rotateAngle}${rotateDeg}${degree}`
            // console.log(rotateDeg, mainBox.style.transform)
        }, 8)
    }
    

    userOptions[0].addEventListener("click", function (){
        setRotationInterval("rotateX(+", "deg)")
    })

    userOptions[1].addEventListener("click", function (){
        setRotationInterval("rotateX(-", "deg)")
    })

    userOptions[2].addEventListener("click", function (){
        setRotationInterval("rotateY(+", "deg)")
    })

    userOptions[3].addEventListener("click", function (){
        setRotationInterval("rotateY(-", "deg)")
    })

    userOptions[4].addEventListener("click", function (){
        setRotationInterval("rotateZ(+", "deg)")
    })

    userOptions[5].addEventListener("click", function (){
        if (rotation){
            clearInterval(rotation)
        }

        rotation = setInterval(() => {
            rotateDeg = rotateDeg + 1
            mainBox.style.transform = `rotateX(+${rotateDeg}deg) rotateY(+${rotateDeg + rotateDeg}deg) rotateZ(+${rotateDeg}deg)`
        }, 8)
    })
}
rotateBox()





