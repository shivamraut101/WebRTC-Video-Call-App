import React, { useMemo } from "react";
import { useContext } from "react";


const PeerContext = useContext(null);

export const PeerProvider = (props)=>{
    
    const peer = useMemo(()=> new RTCPeerConnection({
        iceServers:[
            {
                urls:[
                    "stun:stun.l.google.com:19302",
                    "stun:global.stun.twilio.com:3478"
                ],
            },
        ]
    }),[])
    
    return(
        <PeerContext.Provider value={{peer}}>
            {props.childern}
        </PeerContext.Provider>
    )
}