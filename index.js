// Good luck!
const express = require('express')
const app = express() 


charactersDexter = [
    {
        "name": "Dexter Morgan",
        "role": "Forensic expert / Serial killer",
        "kill_count": 140  
    },
    {
        "name": "James Doakes",
        "role": "Detective / Dexter's adversary",
        "kill_count": 7  
    },
    {
        "name": "Arthur Mitchell",
        "role": "Antagonist / The Trinity Killer",
        "kill_count": 28  
    },
    {
        "name": "Special Agent Frank Lundy",
        "role": "FBI Special Agent / Dexter's ally",
        "kill_count": 4  
    },
    {
        "name": "Rita Bennett",
        "role": "Dexter's wife / Victim of the Trinity Killer",
        "kill_count": 0  
    },
    {
        "name": "LaGuerta",
        "role": "Lieutenant / Miami Metro Police",
        "kill_count": 0 
    },
    {
    
        "name": "Isaak Sirko",
        "role": "Russian mob boss / Dexter's adversary in Season 7",
        "kill_count": 5  
    },
    {
        "name": "Hannah McKay",
        "role": "Poisoner / Dexter's love interest in Seasons 7-8",
        "kill_count": 10  
    },
    {
        "name": "Deborah Morgan",
        "role": "Detective / Dexter's sister",
        "kill_count": 1 
    },
    {
        "name": "Vince Masuka",
        "role": "Forensic expert / Dexter's colleague",
        "kill_count": 0  
    }
]

function getRandomIndex(){
   
      return Math.floor(Math.random() * charactersDexter.length);
    
  }
  
app.use((request,response, next)=>{
    console.log(request.method+ " "+ request.url)
    next()
})

app.get("/",(request,response)=>{
    response.status(200).send("<h1>Welcome to the Dexter Character fan page</h1>")
})

app.get("/doc",(request,response)=>{
    response.status(200).send("<h1>Hello if we wish to get information on random chraracters from the show dexter please fo to /RandomCharacter but if you want to go to spesific characters and their info please go to /characterInfo thank you  </h1>")
})

app.get("/RandomCharacter",(request,response)=>{
    response.status(200).json(charactersDexter[getRandomIndex()])
})

app.get("/characterInfo",(request,response)=>{
    response.status(200).json(charactersDexter[0].name)
})

app.use((request,response, next)=>{(
    response.status(404).send("<h1 style='text-align: center'>404 not found</h1>"))
    next()
})

app.listen(3000, () => {
    console.log("Server running")
})