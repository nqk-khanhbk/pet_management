import { useState } from "react";
import { Sidebar, Menu, MenuItem,SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PetsIcon from '@mui/icons-material/Pets';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      component={
        <NavLink 
          to={to}
          style={({ isActive }) => ({
            color: isActive ? colors.blueAccent[100] : colors.grey[100],
            textDecoration: 'none'
          })}
          onClick={() => setSelected(title)}
        />
      }
      icon={icon}
      active={selected === title}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box sx={{
      "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
      "& .ps-menu-button": {
          backgroundColor: "transparent !important",
        },
      "& .ps-menu-button:hover": {
          color: "#868dfb !important",
        },
      "& .ps-menu-button.active": {
          color: "#6870fa !important",
        },
      "& .ps-submenu-content": { // Thêm style cho nội dung SubMenu
        backgroundColor: `${colors.primary[400]} !important`,
      },
      "& .ps-submenu-root": { // Thêm style cho root của SubMenu
        backgroundColor: "transparent !important",
      },
      display:"flex", 
      height: "100vh" }}>
      <Sidebar
        collapsed={isCollapsed}
        >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Box>
                    <img src="../../assets/logo.png" alt="logo" width="120px"/>
                </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Thú cưng"
              to="/pet"
              icon={<PetsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SubMenu 
              label="Dịch vụ" icon={<PeopleOutlinedIcon />}
            >
              <Item
                title="Danh sách dịch vụ"
                to="/service/list"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Lịch sử khám bệnh"
                to="/service/history"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Bảng giá dịch vụ"
                to="/service/price"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default NavBar;
