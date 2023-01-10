import { Image } from '@mui/icons-material';
import { Box, createTheme, Typography } from '@mui/material';
import { width } from '@mui/system';
import React from 'react';

const AboutUs = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 1024,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <div>
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '50px ',
                    }}
                >
                    <Typography
                        sx={{
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '12px',
                            },
                            maxWidth: '30%',
                            marginTop: '10%',
                        }}
                    >
                        Создатели бренда
                        Создатели бренда Nike познакомились в 1957 году в Университете штата Орегон. Билл Бауэрман — тренер по легкой атлетике, и первокурсник Фил Найт — бегун на среднюю дистанцию. Двое мужчин, страстно любящих спорт, сразу же нашли общий язык. Билл Бауэрман воспитал множество олимпийских чемпионов из числа студентов университета, уделяя большое внимание их всестороннему развитию, а не только физическим тренировкам. В 1972 году его пригласили занять пост тренера олимпийской команды США по легкой атлетике. После смерти великого коуча удостоили собственным бюстом в Национальном зале славы.
                    </Typography>

                    <img
                        style={{
                            maxWidth: '27%',
                            [theme.breakpoints.down('sm')]: {
                                width: '25%',
                            },
                        }}
                        src="https://static.street-beat.ru/upload/iblock/0e1/0e1cdec62be92c73ff88342ce196d87f.png"
                        alt="his photo"
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '5%',
                        [theme.breakpoints.down('sm')]: {
                            height: '250px',
                        },
                    }}
                >
                    <img
                        style={{
                            maxWidth: '30%',
                            marginRight: '20px',
                        }}
                        src="https://static.street-beat.ru/upload/iblock/10d/10d67f1153c7006f3421ac02f1ebdafb.jpg"
                        alt="his photo"
                    />
                    <Typography
                        sx={{
                            maxWidth: '20%',
                            marginTop: '5%',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '12px',
                            },
                        }}
                    >
                        На перепродаже 300 пар они заработали
                        около 8 000 долларов.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            maxWidth: '55%',
                            textAlign: 'center',
                            marginTop: '8%',
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '12px',
                            },
                        }}
                    >
                        Через год компания начинает расширяться. Бывший соперник Найта по университетским забегам Джефф Джонсон становится первым штатным работником «Blue Ribbon Sports». На своем фургоне он ездит на соревнования по легкой атлетике и продает кроссовки Tiger спортсменам. Попутно он расспрашивает легкоатлетов, какую именно обувь они хотели бы покупать, получая бесценную информацию для создания рыночной стратегии Nike.
                    </Typography>
                </Box>

                {/* второй бокс */}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '8%',
                    }}
                >
                    <Box sx={{ ml: '22%' }}>
                        <img
                            style={{ maxWidth: '60%' }}
                            src="https://static.street-beat.ru/upload/iblock/e27/e27573f460b561b3c1f1a51086d60319.png"

                            alt="err"

                        />
                        <h1>Джеф Джонсон</h1>
                        <p>
                            Первый штатный работник</p>
                    </Box>

                    <Box>
                        <img
                            style={{ maxWidth: '50%' }}
                            src="https://static.street-beat.ru/upload/iblock/e35/e35df91c75074ca304090ae6c8825084.png"
                            alt="err"
                        />
                        <Typography
                            sx={{
                                maxWidth: '50%',
                                textAlign: 'center',
                                marginTop: '10%',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '12px',
                                },
                            }}
                        >
                            Джефу приснилась богиня победы Ника, в честь которой назвали кроссовки.
                        </Typography>
                    </Box>
                </Box>

                {/* 3 box */}

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '9%',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '10px',
                            display: 'none',
                        },
                    }}
                >
                    <Typography
                        sx={{
                            [theme.breakpoints.down('sm')]: {
                                fontSize: '12px',
                            },
                            maxWidth: '20%',
                            textAlign: 'center',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '80%',
                            },
                        }}
                    >
                        Первые успехи и неудачи
                        В 1971 году основатель Nike все еще работает в университете, чтобы увеличить доход, который приносит Blue Ribbon Sports. Там он знакомится со студенткой Кэролайн Дэвидсон — девушкой, которая и создает знаменитый «swoosh» Найк. Фил нанимает Кэролайн для разработки логотипа, основанного на идее постоянного движения. Девушка предлагает десятки вариантов, но ни один не нравится Найту

                    </Typography>
                    <Typography
                        sx={{
                            maxWidth: '20%',
                            textAlign: 'center',
                            mt: '15%',
                            [theme.breakpoints.down('sm')]: {
                                display: 'none',
                            },
                        }}
                    >

                    </Typography>

                    <img
                        style={{
                            maxWidth: '20%',
                            [theme.breakpoints.down('md')]: {
                                width: '15%',
                            },
                        }}
                        src="https://static.street-beat.ru/upload/iblock/30c/30c4750d8b27052a6415663d2952c83a.png"
                        alt=""
                    />

                </Box>

                <Box
                    sx={{ display: 'flex', justifyContent: 'center', mt: '6%' }}
                >
                    <img
                        style={{ maxWidth: '50%' }}
                        src="https://static.street-beat.ru/upload/iblock/d97/d97a8d776a46ae668ecaa3e8c851045b.jpg"
                        alt=""
                    />
                </Box>



                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '10%',
                    }}
                >
                    <Box
                        sx={{
                            width: '30%',
                            display: 'flex',
                            flexDirection: 'column',
                            mr: '4%',
                            [theme.breakpoints.down('md')]: {
                                fontSize: '80%',
                            },
                        }}
                    >
                        <Typography sx={{ width: '100%' }}>
                            Но компания не остановилась на теннисе и альпинизме
                            и в 90-е пробилась в бейсбол, футбол и, конечно же,
                            в баскетбол. Настоящим прорывом стали именные модели
                            для Джерри Стэкхауза и Гранта Хилла
                        </Typography>
                        <img
                            style={{
                                width: '100%',
                            }}
                            src="https://static.street-beat.ru/upload/iblock/502/5021b0c08ace2d75f250fb401e1c0528.png"
                            alt=""
                        />
                    </Box>
                    <Box
                        sx={{
                            width: '30%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <img
                            style={{ width: '100%' }}
                            src="https://static.street-beat.ru/upload/iblock/7eb/7eb481bcd78edab0b203e8bc1f6ae106.png"
                            alt=""
                        />
                        <Typography sx={{ width: '100%' }}>
                            Nike & Jordan
                            В 1985 году руководство Nike в очередной раз продемонстрировало потрясающее чутье на спортивные таланты. Бренд подписывает контракт с новичком команды «Chicago Bulls» Майклом Джорданом. С приходом талантливого баскетболиста в семью Nike многое меняется — дизайн продукции, маркетинговые принципы, ассортимент. Впервые разрабатывается концепция новой коллекции Jordan, куда входит обувь и одежда.
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        marginTop: '10%',
                        justifyContent: 'center',
                    }}
                >
                    <img
                        style={{ maxWidth: '60%' }}
                        src="https://static.street-beat.ru/upload/iblock/a96/a969903629d42b3656584b61aa88502e.png"
                        alt=""
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: '5%',
                    }}
                >
                    <Typography sx={{ maxWidth: '55%', textAlign: 'center' }}>
                        В начале 00-х Nike, вспомнив о своих итальянских корнях,
                        заключают контракты с конюшней Формулы-1 «Феррари»
                        (также в отдельности — с Михаэлем Шумахером) и с
                        командой чемпионата мира по супербайку «Дукати».
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '5%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            width: '40%',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            marginLeft: '50px',
                        }}
                    >
                        <img
                            style={{
                                width: '65%',
                                height: '60%',
                            }}
                            src="https://static.street-beat.ru/upload/iblock/1fe/1fe8726a4b8ddd4e8241edaa71bca902.png"
                            alt="his photo"
                        />
                        <Typography
                            sx={{
                                width: '100%',
                                marginTop: '5%',
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '12px',
                                },
                            }}
                        >
                            Еще один шаг к популяризации спорта — сотрудничество Nike с Apple, которое началось в 2006 году. Цифровой гигант внедряет в кроссовки Nike небольшой датчик, который собирает данные о тренировке и помогает улучшить результаты. Позже сотрудничество стало еще более фундаментальным: под совместным брендом Nike+ выпускаются смарт-часы, создаются спортивные приложения для гаджетов. Спорт становится простым и доступным благодаря инновационным разработкам бренда.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            mb: '5%',

                            display: 'flex',
                            justifyContent: 'center',
                            mt: '5%',
                            ml: '30px',
                            [theme.breakpoints.down('md')]: {
                                width: '40%',
                                mb: '10%',
                            },
                        }}
                    >
                        <img
                            style={{
                                width: '60%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            src="https://static.street-beat.ru/upload/iblock/28a/28a86d0c653df3d2302682d76b1d008f.jpg"
                            alt="err"
                        />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default AboutUs;
