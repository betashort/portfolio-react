import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  interface IPageUrl {
    url: string;
    title: string;
  };
  const pageUrls:IPageUrl[] = [
    {title: "Profile", url: "/profile"},
    {title: "Art Gallary", url: "/art-gallary"},
    {title: "Contact", url: "/contact"}
  ]
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pageUrls.map((pageUrl) => (
          <ListItem key={pageUrl.title} disablePadding>
            <ListItemButton component={Link} to={pageUrl.url}>
              <ListItemText primary={pageUrl.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <nav className="w-full h-14 bg-gray-900">
        <div className="flex items-center justify-between  bg-gray-900 max-w-5xl h-full mx-auto">
          <div className="flex items-center pl-4">
            <Link to="/portfolio-react" className="text-xl font-bold text-gray-200">
              βshort ポートフォリオ
            </Link>
          </div>
          <div className="">
            {/* <!-- Mobile menu button --> */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
            </div>
            {/* !-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className="hidden -mx-4 lg:flex lg:items-center">
              <Link
                to="/profile"
                className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
              >
                PortFolio
              </Link>
              <Link
                to="/art-gallary"
                className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
              >
                Art Gallary
              </Link>
              <Link
                to="/contact"
                className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
