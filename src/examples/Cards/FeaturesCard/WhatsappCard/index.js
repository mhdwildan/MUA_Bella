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
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import { IconButton } from "@mui/material";
import FaWhatsapp from "@mui/icons-material/WhatsApp";

function WhatappCard({ color, title, description }) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant="h1" color={color} textGradient>
        <IconButton
          component="a"
          href="https://wa.me/6283832504009" // replace with your number
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: "64px",
            color: "#25D366", // WhatsApp green
            "&:hover": { color: "#128C7E" },
          }}
        >
          <FaWhatsapp />
        </IconButton>
      </MKTypography>
      {title && (
        <MKTypography variant="h5" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

// Setting default props for the WhatappCard
WhatappCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
};

// Typechecking props for the WhatappCard
WhatappCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default WhatappCard;
