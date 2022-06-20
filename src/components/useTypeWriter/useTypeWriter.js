import { useEffect, useState } from "react"

export const useTypeWriter = (word)=>{
    const [wordState,setWordState] = useState("")
    const [index,setIndex] = useState(0)

    const [timing,setTiming] = useState("typing")
    useEffect(()=>{
        switch(timing){
            case "typing":{
                
                const timeOut = setTimeout(()=>{
                    setWordState(word[index].slice(0,wordState.length+1))
                    
        
                    
        
        
                },150)
                if(word[index].length==wordState.length){
            
                    setTiming("pausing")
                    return
                }
                return ()=> clearTimeout(timeOut)}
            case "pausing":{
                const timeOut = setTimeout(()=>{
                    
                    if(word[index].length==wordState.length){
            
                        setTiming("deleting")
                        return
                    }else{
                        setTiming("typing")
                        
                        return
                    }
        
        
                },2000)
                return ()=> clearTimeout(timeOut)}
            case "deleting":{
                const timeOut = setTimeout(()=>{
                    setWordState(word[index].slice(0,wordState.length-1))
        
                    
                },150)
                if(wordState.length==1){
                    setIndex(index < index.length ? index+1 : 0)
                    console.log(index);
                    setTiming("pausing")

                    setIndex(index < word.length-1 ? index+1 : 0)
                    console.log(wordState);
                    return
                }
                return ()=> clearTimeout(timeOut)}


        }
        






            
        



    },[wordState,timing,index])

    return wordState


}
