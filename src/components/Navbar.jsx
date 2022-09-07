import { Box } from '@mui/material';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <>
          <Box sx={{backgroundColor: "#d2cba4", display:"flex", justifyContent:"space-around"}}>
               <Box sx={{color:"white" , fontSize:"small", alignItems:"center"}}>
                   Добро пожаловать на сайт отеля "Акун Иссык-Куль"
               </Box>
               <Box>
                   <a href='https://www.facebook.com/akunhotel?ref=hl'>
                       <FacebookIcon sx={{color:"black", backgrounColor:"#d2cba4"}}/>
                   </a>
                   <a href='https://ok.ru/profile/555120939595'>
                     <img src='https://www.shareicon.net/download/2016/11/14/852313_square_512x512.png' style={{width:"23px",height:"23px"}}></img>
                   </a>
               </Box>

           </Box>
           <Box sx={{display:"flex", justifyContent:"space-around", backgroundColor:"rgb(230, 230, 230)"}}>
               <Box>
                  <h1 sx={{width: "425px"}}> A K U N</h1>
                 <h5>
                     -------yssyk-kul hotel
                </h5>
               </Box>
               <Box >
              
               <Box sx={{marginTop:"20px"}}>
                     <WhatsAppIcon sx={{ right:"5px"}} />
                      
                          +996 (775)-999-555,  +996 (770)-550-322
                       
                   </Box>

                   <Box>
                      <CallIcon sx={{ right:"5px" }}/>
                      +996 (3943)-54-135
                   </Box>
                   <input type={hidden} value="search"></input>
               </Box>
           </Box>
        </>
    )
}

export default Navbar;