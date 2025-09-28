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

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultNavbarMobile({ routes, open }) {
  const renderNavbarItems = routes.map(({ name, icon, href, route }) => {
    const linkComponent = route
      ? {
          component: Link,
          to: route,
        }
      : {
          component: MuiLink,
          href,
          target: "_blank",
          rel: "noreferrer",
        };

    return (
      <MKBox
        key={name}
        {...linkComponent}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
        color="dark"
        opacity={0.6}
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
  });

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
        {renderNavbarItems}
      </MKBox>
    </Collapse>
  );
}

// Typechecking props for the DefaultNavbarMobile
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
