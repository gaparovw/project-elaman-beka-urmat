import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import images from "../../images/fila.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { navbarContext } from "../../contexts/NavabarContext";
import { Input, InputAdornment } from "@mui/material";
import NavbarHover from "./NavbarHover";
import { useAuth } from "../../contexts/AuthContextProvaider";
import Badge from "@mui/material/Badge";
import { useCart } from "../../contexts/CartContextProvaider";
import { getCountProductsInCart } from "../../helpers/functions";
import { ADMIN } from "../../helpers/consts";

const pages = ["New", "Shoes", "Men", "Women", "Tennis", "work", "WareHouse"];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { setHover, searchState, setSearchState, hover } =
        React.useContext(navbarContext);
    const {
        user: { email },
        handleLogout,
    } = useAuth();
    const { addProductToCart } = useCart();
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        setCount(getCountProductsInCart);
    }, [addProductToCart]);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const hoverNav = () => {
        setHover(true);
        setSearchState(false);
    };
    const openSearch = () => {
        setHover(false);
        setSearchState(!searchState);
    };
    const navigate = useNavigate();

    //! SEARCH

    const [searchParams, setSearchParams] = useSearchParams();

    const [search, setSearch] = React.useState(searchParams.get("q") || "");

    React.useEffect(() => {
        setSearchParams({
            q: search,
        });
    }, [search]);

    return (
        <AppBar
            position="sticky"
            sx={{ backgroundColor: "white", boxShadow: "none" }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        onClick={() => navigate("/")}
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "black",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            sx={{ width: "55px" }}
                            width="75"
                            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD39/ft7e34+PhoaGhQUFDDw8PQ0NDc3Nyrq6uTk5Ovr6+7u7vKysrn5+ebm5tXV1csLCzW1tZtbW0zMzOBgYEiIiJCQkJdXV20tLRycnIQEBDx8fGZmZk8PDx8fHxJSUkXFxeKioqioqIUFBQ1NTWfOkAUAAAD9UlEQVR4nO3aa3vxShSAYSMIIaSlVdUWld3//xN3HBIJOc6sId7rub9bM4tZc9TpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE/N6T66Bw30ND7jbKV7Yc3Um2p86lvNxHtiwywcrHTyixLsS/dFXtd9V2qr90t0l2ok3B1p82CnlAp1CjDSW6oX2f7Icib9KDv14WpHiL4drbF9F+776yE91Z/rx1gp9SrXI0mjYKBO9o5BmKh8lSfWKTHO5+Kcnfr1NMvvxDvEaNlq35vu3+L0TMrvaHgIspbpmIxROFAXfdNJ3jmGac08Ew3Nr1R6ZuV3choMAn0zFw3NZTo7tZSYHdbHUFuBSIYus6ZU+Z14qg2DNDVrJhYye6zROdwjZ9L0rJkYm5ffye8p3k4oXGO3Q/NYfhOxBuKxMRaL2MD1rBnbCZaMHwcVKekmerlD82AtecRxkrD3PftmF/Rs+X2LtrRLAouGLeX4+UNTuPxOgkto4cgFoqH5WpSdUi/iK9YsFVw6do5R+FKcXbTlsHDDsLmEt31D8+2vy7JT6sfGeuylGlhYiJ+Yjz/K03v9tNLud7oNa7/hbLIqz85G+Z31060MbLTQc7fLorQSmjeDNQyzDYnHn//sKrOzVH5nVxsK0dizST8/oaw3O+V3NrlqzeCaLqsb3/xVWQ2lmsx33Z7MznseVMyaCXvldxZct2h+WVpzaB6F1k+jvdtGjQ4X0dAs3Gve2PhSaZS4+QlNfsT5T92heWC7/M7ymg51AjkNhubB+51OaV5u6013vj33vXpBT/vSfRdrrmA6b3L2PD3lNXGX8jsbFvThq+YQajJrxlZiC24dxf2r/pprL+gZ+/teknTLvurSrjSbNWO/WnOYiesNW1bRUXvkNR+aB5u73+J1OoXXXGdvwTw75znToPKQV8D4XUxH2SC9fPPrsee7rh+O1x//aWYn8i6mw6/umQiRdzEt27vkt3tA+cU0JvvGhN7F9OQcK6TtZS/mmxpV99DI48ov5lrNb/DA8ouVr/dmHlp+idBafsLvYtosZSj+LqbPSoaD1vzdqFN0vjci+ixtTnzT1pbyS8iuh5bexYzUOlrUZO1dzEzBfzyas34xr2svk1/QtvK7mAuk99fC8ksxPj4N7nMxr89wRWxt+aWY5Be07P/u+bQX/b87Xsyb0bv5bH35pf02z8/Gn7Iscqozyljaf5aW5tR/lI6O7s80PBO90v8JpgzavbiXqXNhs/Mecy8vpFe+Q/1a+E9XfDe63l9Bev3wuabOErPJInuc2vR/3CfYlzU0G079z0/fHY7aeyQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAv+Z/HBwq9QVvQoQAAAAASUVORK5CYII='
                            alt=""
                        />
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <MenuItem
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "35vh",
                                    justifyContent: "space-around",
                                }}
                                onClick={handleCloseNavMenu}
                            >
                                {email === ADMIN ? (
                                    <Button
                                        onClick={() => navigate("/admin")}
                                        sx={{ textAlign: "center" }}
                                        color="inherit"
                                    >
                                        admin
                                    </Button>
                                ) : (
                                    <></>
                                )}

                                <Button
                                    onClick={() => navigate("/products")}
                                    sx={{ textAlign: "center" }}
                                    color="inherit"
                                >
                                    product
                                </Button>
                                <Button
                                    onClick={() => navigate("/aboutus")}
                                    sx={{ textAlign: "center" }}
                                    color="inherit"
                                >
                                    about us
                                </Button>
                                <Button
                                    onClick={() => navigate("/contactus")}
                                    sx={{ textAlign: "center" }}
                                    color="inherit"
                                >
                                    contact us
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".6rem",
                            color: "black",
                            textDecoration: "none",
                        }}
                    >
                        <img
                            sx={{ width: "55px" }}
                            width="75"
                            src={images}
                            alt=""
                        />
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {email === ADMIN ? (
                            <Button
                                onClick={() => navigate("/admin")}
                                sx={{
                                    color: "black",
                                }}
                            >
                                admin
                            </Button>
                        ) : (
                            <></>
                        )}

                        <Button
                            onClick={() => navigate("/products")}
                            onMouseEnter={hoverNav}
                            sx={{ color: "black" }}
                        >
                            products
                        </Button>
                        <Button
                            onClick={() => navigate("/aboutus")}
                            sx={{ color: "black" }}
                        >
                            About us
                        </Button>
                        <Button
                            onClick={() => navigate("/contactus")}
                            sx={{ color: "black" }}
                        >
                            contact us
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip>
                            <IconButton
                                onClick={openSearch}
                                sx={{ p: 0, width: "40px" }}
                            >
                                <SearchOutlinedIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0, width: "40px" }}
                            >
                                <PersonIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip>
                            <IconButton
                                onClick={() => navigate("/cart")}
                                sx={{ p: 0, width: "40px" }}
                            >
                                <Badge badgeContent={count} color="primary">
                                    <LocalMallIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>

                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {email ? (
                                <MenuItem onClick={handleLogout}>
                                    <Typography sx={{ textAlign: "center" }}>
                                        Logout
                                    </Typography>
                                </MenuItem>
                            ) : (
                                <Link
                                    to="/auth"
                                    style={{
                                        textDecoration: "none ",
                                        color: "black",
                                    }}
                                >
                                    <MenuItem onClick={handleLogout}>
                                        <Typography
                                            sx={{ textAlign: "center" }}
                                        >
                                            login
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
            {searchState && (
                <Box
                    sx={{
                        position: "absolute",
                        marginTop: "50px",
                        background: "white",
                        width: "95%",
                        paddingLeft: "5%",
                    }}
                >
                    <Input
                        id="standard-adornment-amount"
                        sx={{
                            width: "90%",
                            marginBottom: "0px",
                            paddingLeft: "20px",
                            fontSize: "25px",
                            boxShadow:
                                "0px 5px 10px -5px rgba(34, 60, 80, 0.6)",
                        }}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search"
                        endAdornment={
                            <InputAdornment
                                sx={{ cursor: " pointer" }}
                                position="start"
                                onClick={() => setSearchState(false)}
                            >
                                X
                            </InputAdornment>
                        }
                    />
                </Box>
            )}
            {hover && <NavbarHover />}
        </AppBar>
    );
}
export default Navbar;
