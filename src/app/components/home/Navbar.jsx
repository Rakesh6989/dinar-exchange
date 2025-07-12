"use client";
import Link from "next/link";

import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Typography,
  IconButton,
  Button,
  Badge,
  Popper,
  Paper,
  MenuList,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";

const navItems = [
  { label: "TOPWEAR", dropdown: ["T-Shirts", "Shirts", "Hoodies"] },
  { label: "BOTTOMWEAR", dropdown: ["Jeans", "Joggers", "Shorts"] },
  { label: "COMBOS" },
  { label: "NEW ARRIVALS" },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const anchorRefs = useRef([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleHover = (index) => {
    setAnchorEl(anchorRefs.current[index]);
    setOpenIndex(index);
  };

  const handleLeave = () => {
    setOpenIndex(null);
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: "white", color: "black" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", width: "100%" }}
        >
          <Link href="/">
            <Typography variant="h6" fontWeight="bold">
              SITARE WARGI
            </Typography>
          </Link>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item, index) => {
              const hasDropdown = !!item.dropdown;

              return (
                <Box
                  key={index}
                  sx={{ position: "relative" }}
                  onMouseEnter={() => hasDropdown && handleHover(index)}
                  onMouseLeave={handleLeave}
                  ref={(el) => (anchorRefs.current[index] = el)}
                >
                  <Button
                    endIcon={hasDropdown && <ArrowDropDownIcon />}
                    sx={{ color: "black", fontWeight: "bold" }}
                  >
                    {item.label}
                  </Button>

                  {hasDropdown && openIndex === index && (
                    <Popper
                      open
                      anchorEl={anchorRefs.current[index]}
                      placement="bottom-start"
                      sx={{ zIndex: 1200 }}
                    >
                      <Paper elevation={2}>
                        <MenuList>
                          {item.dropdown.map((subItem, subIndex) => (
                            <MenuItem key={subIndex}>{subItem}</MenuItem>
                          ))}
                        </MenuList>
                      </Paper>
                    </Popper>
                  )}
                </Box>
              );
            })}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", gap: 2, mr: 2 }}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Link href="/cart">
              <IconButton>
                <Badge badgeContent={5} color="warning">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item, index) => (
              <Box key={index}>
                <ListItem component="button">
                  {" "}
                  <ListItemText primary={item.label} />
                </ListItem>
                {item.dropdown &&
                  item.dropdown.map((subItem, subIndex) => (
                    <ListItem key={subIndex} sx={{ pl: 4 }}>
                      <ListItemText primary={subItem} />
                    </ListItem>
                  ))}
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
