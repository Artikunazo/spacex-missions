import { AppBar, Toolbar } from "@mui/material";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <h1>SpaceX Missions</h1>
            </Toolbar>
        </AppBar>
    );
}

export default Header;