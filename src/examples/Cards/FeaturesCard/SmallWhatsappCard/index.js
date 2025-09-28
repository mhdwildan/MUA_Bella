/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

import { Button } from "@mui/material";
import FaWhatsapp from "@mui/icons-material/WhatsApp";

function SmallWhatappCard({ title }) {
  return (
    <Button
      component="a"
      href="https://wa.me/6283832504009" // replace with your number
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: "flex",
        flexDirection: "column", // stack icon + title
        alignItems: "center",
        justifyContent: "center",
        gap: "4px", // minimal space
        backgroundColor: "#25D366",
        color: "white",
        textTransform: "none",
        borderRadius: "12px",
        padding: "12px 16px",
        minWidth: "90px",
        "&:hover": {
          backgroundColor: "#128C7E",
        },
      }}
    >
      <FaWhatsapp sx={{ fontSize: 30 }} />
      <MKTypography
        variant="button"
        sx={{ fontSize: "11px", fontWeight: "bold", lineHeight: 1, color: "white" }}
      >
        {title}
      </MKTypography>
    </Button>
  );
}
SmallWhatappCard.defaultProps = {
  title: "",
};

SmallWhatappCard.propTypes = {
  title: PropTypes.string,
};

export default SmallWhatappCard;
