import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CreateIcon from "@mui/icons-material/Create";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ isSticky }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{

        position: isSticky ? "sticky" : "relative", // Make it sticky
        minWidth: "270px",
        "& .pro-sidebar": {
          top: "0", // Adjust as needed
          zIndex: "100", // Adjust as needed
          height: "100vh", // Limit height
          overflowY: "auto", // Enable scrolling
        },
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
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
                justifyContent="right"
                alignItems="center"
                ml="15px"
              >

                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Admin
                </Typography>

              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Ongoing Exams"
              to=""
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <SubMenu title="Create Exam" icon={<AppRegistrationIcon />} style={{
              color: colors.grey[100],
            }}>
              <Item
                title="Create New Exam"
                to="new_exam"
                icon={<CreateIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Existing Exam"
                to="existing_exam"
                icon={<EventRepeatOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

            </SubMenu>
            <Item
              title="Generate Question"
              to=""
              icon={<PostAddOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Past Exams"
              to="past_exams"
              icon={<HistoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="View Questions"
              to="view_questions"
              icon={<NoteAltOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Publish Result"
              to="publish_results"
              icon={<UploadFileOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Edit Profile"
              to="edit_profile"
              icon={<AccountCircleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;