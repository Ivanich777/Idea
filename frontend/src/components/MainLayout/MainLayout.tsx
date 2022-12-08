import React from "react";
import { Box } from "@mui/material";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useSelector } from "react-redux";

function MainLayout({ count }: { count: number }): JSX.Element {
  const isAuth = useSelector(state => state)

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <Header count={count} />
      <Box sx={{ display: "flex", flexGrow: 1 }} />
      <Footer />
    </Box>
  );
}

export default MainLayout;
