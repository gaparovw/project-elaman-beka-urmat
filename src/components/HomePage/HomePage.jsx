import { Button, createTheme, Grid, ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homePageBlock3.css';

const shopsPhotoItems = [
    {
        name: 'Neon',
        img: 'https://static.street-beat.ru/upload/iblock/0fc/0fcc290a5b27df195d2bf3f76faef4d9.jpg',
    },
    {
        name: 'Velour',
        img: 'https://static.street-beat.ru/upload/iblock/493/4936fa9f56ed5ad7928404aea6aa47ab.jpg',
    },
    {
        name: 'Basketball',
        img: 'https://static.street-beat.ru/upload/iblock/44c/44c174dc02939e0d686ea1ae6477dafd.jpg',
    },
    {
        name: 'Tie Dye',
        img: 'https://static.street-beat.ru/upload/iblock/0ed/0edd0b71ad74b766f9562a0060c6fe4f.jpg',
    },
    {
        name: 'Premium',
        img: 'https://static.street-beat.ru/upload/iblock/38f/38ff90a6833e5396edbb1c5a80e7a5a2.jpg',
    },
    {
        name: 'One World',
        img: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/5e4a0ef7-a2c9-483a-8e5b-45d8277db19d/nike-just-do-it.jpg',
    },
];

const HomePage = () => {
    const navigate = useNavigate();

    const theme = createTheme();
    return (
        //! BLOCK-1 ELIZA
        <ThemeProvider theme={theme}>
            <Grid>
                <Box sx={{ width: '100%', marginBottom: 5 }}>
                    <img
                        src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/1d6f3383-69c7-4c79-be54-e4b2f9946599/nike-just-do-it.png"
                        alt=""
                        width={'100%'}

                    />
                </Box>
                <Grid
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <Box
                        sx={{
                            display: {
                                lg: 'flex',
                                xs: 'none',
                            },
                        }}
                    >
                        <img
                            sx={{
                                width: {
                                    lg: '100%',
                                },
                            }}
                            className="image-one"
                            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/012201f7-1de7-450d-93c7-0a498e52fc84/nike-just-do-it.jpg"
                            alt=""
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >


                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                },
                            }}
                        >
                            {' '}
                            <img
                                className="image-two"
                                src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/a457ea16-f2a3-48fe-9a07-6ac88217d17f/nike-just-do-it.jpg"
                                alt=""
                            />
                        </Box>
                    </Box>
                </Grid>
                {/* ADAHAN */}

                <div className="tranding__mainBlock">
                    <h3>Trending Shops</h3>
                    <div className="photosTranding">
                        {shopsPhotoItems.map((e, index) => (
                            <div key={index} className="photoDivs">
                                <img src={e.img} alt="" width="100%" />
                                <p>{e.name}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <img
                            className="mainPhoto"
                            src="abra-fun-p-oboi-s-krossovkami-naik-25.jpg"
                            alt=""
                        />
                    </div>
                    <div className="headerMain">
                        <h3>Nike Atrani Collection</h3>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0a203f',
                                color: 'white',
                                width: '200px',
                                height: '50px',
                            }}
                            onClick={() => navigate('/products')}
                        >
                            SHOP NOW
                        </Button>
                    </div>
                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'block',
                            },
                        }}
                    >
                        <div className="center_div">
                            <div className="left_div">
                                <h3 className="text-3"></h3>
                                <img
                                    src=""
                                    alt=""
                                />
                            </div>
                            <div className="right_div">
                                <img
                                    src=""
                                    alt=""
                                />
                            </div>
                        </div>
                    </Box>
                </div>

                {/* //! BLOCK-3 SULTAN */}
                <Box>
                    <img
                        width="100%"
                        src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1344,c_limit/5e4a0ef7-a2c9-483a-8e5b-45d8277db19d/nike-just-do-it.jpg"
                        alt=""
                    />

                    <h1 className="text">Hailey for Nike</h1>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0a203f',
                                color: 'white',
                                width: '200px',
                                height: '50px',
                            }}
                        >
                            DISCOVERE MORE
                        </Button>
                    </Box>
                    <Grid
                        className="btn2"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#0a203f',
                                color: 'white',
                                width: '260px',
                                height: '70px',
                                mb: '50px',
                                mt: '50px',
                            }}
                            onClick={() => navigate('/products')}
                        >
                            SHOP NOW
                        </Button>
                    </Grid>
                </Box>
            </Grid>
        </ThemeProvider>
    );
};

export default HomePage;
