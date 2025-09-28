/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultNavbarDropdown({
  name,
  icon,
  light,
  href,
  route,
  ...rest
}) {
  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };

  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <MKBox
      {...rest}
      mx={1}
      p={1}
      display="flex"
      alignItems="baseline"
      color={light ? "white" : "dark"}
      opacity={light ? 1 : 0.6}
      sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
        cursor: "pointer",
        userSelect: "none",
        borderRadius: borderRadius.md,
        transition: "all 300ms linear",

        "&:hover": {
          backgroundColor: grey[200],
          color: dark.main,
          opacity: 1,
        },
      })}
      {...(route && routeComponent)}
      {...(href && linkComponent)}
    >
      <MKTypography
        variant="body2"
        lineHeight={1}
        color="inherit"
        sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
      >
        {icon}
      </MKTypography>
      <MKTypography
        variant="button"
        fontWeight="regular"
        textTransform="capitalize"
        color="inherit"
        sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
      >
        {name}
      </MKTypography>
    </MKBox>
  );
}

// Setting default values for the props of DefaultNavbarDropdown
DefaultNavbarDropdown.defaultProps = {
  light: false,
  href: "",
  route: "",
};

// Typechecking props for the DefaultNavbarDropdown
DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
};

export default DefaultNavbarDropdown;
