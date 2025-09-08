import { AppBar, Toolbar } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <h1 className="text-2xl font-bold">SpaceX Missions</h1>
      </Toolbar>
    </AppBar>
  );
}
