// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Grid, Typography } from '@mui/material';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import { allImages } from '../../assets';

// const ScreenshotCanvas = ({ handleScreenshot, createdImage }) => {

//     useEffect(() => {
//         handleScreenshot();
//     }, []);

//     useEffect(() => {
//         if (createdImage) {
//             localStorage.setItem('capturedImage', createdImage);
//         }
//     }, [createdImage]);

//     const color = localStorage.getItem('currentColor');
//     return (
//         <div style={{
//             height: 600,
//             width: 300,
//             marginTop: '20px',
//             borderRadius: '10px',
//             background: color,
//             overflow: 'hidden'
//         }}
//             calssName='StoryCertificate'
//         >
//             <div
//                 style={{
//                     height: '100%',
//                     width: '100%',
//                     background: color,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     overflow: 'hidden',
//                     textShadow: '1px 1px 1px grey',
//                     padding: '30px 15px'
//                 }}
//                 className={'StoryCertificate'}
//             >
//                 <Typography sx={{
//                     textAlign: 'center',
//                     fontSize: '18px',
//                     color: '#FFF',
//                     fontWeight: '500',
//                 }}>
//                     MODIFICATIONS (Part-1)| Honda Civic Rebirth UG | Pikstan |
//                 </Typography>
//                 <Typography sx={{
//                     textAlign: 'center',
//                     fontSize: '13px',
//                     color: '#E2E2DF',
//                     fontWeight: '300',
//                 }}>
//                     Usama Bin Zahid
//                 </Typography>
//                 <Typography sx={{
//                     textAlign: 'center',
//                     fontSize: '30px',
//                     color: '#FFF',
//                     fontWeight: '700',
//                     marginTop: '20px'
//                 }}>
//                     <AutoAwesomeIcon
//                         sx={{
//                             fontSize: '50px',
//                             margin: '20px 20px 0px 0px'
//                         }} htmlColor='yellow' />
//                     Winner
//                     <AutoAwesomeIcon sx={{
//                         rotate: '180deg',
//                         fontSize: '50px',
//                         margin: '20px 0px 0px 20px'
//                     }} htmlColor='yellow' />
//                 </Typography>
//                 <Box sx={{
//                     height: "130px",
//                     width: '130px',
//                     borderRadius: '100px',
//                     bgcolor: '#FFF',
//                     marginTop: '20px',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',

//                 }}>
//                     <img src={allImages.YoutubeLogo} alt='No Image' height={"70%"} width={"70%"} />
//                 </Box>
//                 <Typography sx={{
//                     textAlign: 'center',
//                     fontSize: '20px',
//                     color: '#FFF',
//                     fontWeight: '600',
//                     mt: '20px'
//                 }}>
//                     Usama Bin Zahid
//                 </Typography>
//                 <Box sx={{
//                     height: "50px",
//                     width: "100%",
//                     borderRadius: '10px',
//                     bgcolor: '#FFF',
//                     marginTop: '30px',
//                     display: 'flex',
//                     justifyContent: 'space-around',
//                     alignItems: 'center',

//                 }}>
//                     <Box sx={{
//                         height: '45px',
//                         width: '45px',
//                         borderRadius: '100px',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         overflow: 'hidden',

//                     }}>
//                         <img src={allImages.Logo} alt='No Image' height={"100%"} width={"100%"} />
//                     </Box>
//                     <Typography>|</Typography>
//                     <Typography>CODE : 1242524</Typography>

//                 </Box>
//             </div>


//         </div>
//     );
// };

// export default ScreenshotCanvas;






// put this app function at you render screen 


// function App() {
//     return (
//         <Grid container>
//             <Grid
//                 item
//                 md={12}
//                 sm={12}
//                 xs={12}
//                 display={'flex'}
//                 flexWrap={"wrap"}
//                 sx={{
//                     alignItems: { xs: 'center', md: 'start', sm: 'start' },
//                     justifyContent: { xs: 'center', md: 'space-between', sm: 'space-between' }
//                 }}
//             >
//                 <Box sx={{ margin: '0 10px' }}>
//                     <Box display={'flex'} alignItems={'center'}>
//                         <PhotoSizeSelectActualOutlinedIcon htmlColor='#000' fontSize='10px' />
//                         <Typography variant='h6' fontSize='14px' marginLeft='10px'>
//                             Story Certificate (.jpg)
//                         </Typography>
//                     </Box>
//                     <Box sx={{ height: 40, marginTop: '20px' }}>
//                         <CustomButton
//                             btnLabel={"Download Image"}
//                             btnBgColor={"#fff"}
//                             btnTextColor={"#000"}
//                             btnHoverColor={'#F7F9FB'}
//                             border={'1px solid #E2E2DF'}
//                             handlePressBtn={handleDownloadScreenshot}
//                             borderRadius={'4px'}
//                         />
//                     </Box>
//                 </Box>
//                 <Box
//                     sx={{
//                         height: 300,
//                         width: 200,
//                         borderRadius: '12px',
//                         overflow: 'hidden',
//                     }}
//                 >
//                     <img src={winnerVaoutcher} alt='No Image' height={"100%"} width={'100%'} />
//                     <ScreenshotCanvas handleScreenshot={handleScreenshot} createdImage={createdImage} display={winnerVaoutcher ? "none" : ''} />
//                 </Box>
//             </Grid>
//         </Grid>
//     )
// }
// export default App;
