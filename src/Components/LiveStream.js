
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
const LiveStream = () => {
    const [info, setInfo] = useState({});
    const url = `https://ftapp.lfcww.org/api/Dashboard/togglelivestreamstate`;
    const getInfo = async()=>{
      try {
        const response = await fetch(url);
         const data = await response.json()
         setInfo(data);
      } catch (error) {
          console.error(error);
      } 
    }

    useEffect(()=> {
      getInfo();
    }, []);

    return ( 
       <>
       <Navigation />
       <div>
       <Container fluid className="height center">
            <ReactPlayer url={info.LiveStreamUrl}/>
            <p>Service Title:{info.LiveStreamTitle}<br/> Online User Count for current Service:{info.OnlineUsersCount}</p>
        </Container>
       </div>
       <Footer />
       </>
        
     );
}
 
export default LiveStream;