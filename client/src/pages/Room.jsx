import React, { useEffect } from "react";
import { useSocket } from "../providers/Socket";

const RoomPage = () =>{

    const { socket } = useSocket() 

    const handleNewUserJoined =(data)=>{
        const {emailId} = data;
        console.log("new user joined ", emailId)
     }

    useEffect(()=>{
        socket.on("joined-room",handleNewUserJoined)
    },[socket])

    return(
        <>

        </>
    )
}