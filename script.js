


gsap.from("#main>h1",{
    y:-400,
    duration:2,
    opacity:5,
    
   
})

gsap.from(".card1>h2",{
    x:-400,
    duration:2,
    opacity:5,
    scrollTrigger:{
        trigger:".card1>h2",
        
        start:"top 40%",
        end:"top 30%"
    }
})
gsap.from(".card1 #h13",{
    x:-400,
    duration:2.5,
    opacity:5,scrollTrigger:{
        trigger:".card1 #h13",
        
    }
})
gsap.from(".card2>h2",{
    x:-400,
    duration:2.5,
    opacity:5,scrollTrigger:{
        trigger:".card2>h2",
        
    }
})
gsap.from(".card2 #h14",{
    x:-400,
    duration:2.5,
    opacity:5,scrollTrigger:{
        trigger:".card2 #h14",
        
    }
})
gsap.from(".card3>h2",{
    x:-400,
    duration:2.5,
    opacity:5,scrollTrigger:{
        trigger:".card2 #h14",
        
    }
})
 gsap.from(".card2 #img2",{
     rotate:"360 deg",
     scrollTrigger:{
         trigger:".card2 #h14",
     }
 })
 gsap.from(".card2 #img3",{
     rotate:"360 deg",
     scrollTrigger:{
         trigger:".card2 #h14",
     }
 })
