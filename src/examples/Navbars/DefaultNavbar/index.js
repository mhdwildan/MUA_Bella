/* eslint-disable no-param-reassign */
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

import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React example components
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Material Kit 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

function DefaultNavbar({ brand, routes, transparent, light, sticky, relative, center }) {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

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
      <MKTypography
        key={name}
        {...linkComponent}
        variant="button"
        fontWeight="regular"
        textTransform="capitalize"
        color="inherit"
        px={1.5}
        py={0.5}
        sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
          borderRadius: borderRadius.md,
          cursor: "pointer",
          transition: "all 300ms linear",

          "&:hover": {
            backgroundColor: grey[200],
            color: dark.main,
          },
        })}
      >
        {icon && <Icon sx={{ mr: 1, verticalAlign: "middle" }}>{icon}</Icon>}
        {name}
      </MKTypography>
    );
  });

  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      <MKBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? "100%" : "calc(100% - 48px)"}
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <MKBox display="flex" justifyContent="space-between" alignItems="center">
          <MKBox
            component={Link}
            to="/"
            lineHeight={1}
            py={transparent ? 1.5 : 0.75}
            pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
          >
            <MKTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
              {brand}
            </MKTypography>
          </MKBox>
          <MKBox
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            ml="auto"
            mr={center ? "auto" : 0}
          >
            {renderNavbarItems}
          </MKBox>
          <MKBox
            display={{ xs: "inline-block", lg: "none" }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            color={transparent ? "white" : "inherit"}
            sx={{ cursor: "pointer" }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
          </MKBox>
        </MKBox>
        <MKBox
          bgColor={transparent ? "white" : "transparent"}
          shadow={transparent ? "lg" : "none"}
          borderRadius="xl"
          px={transparent ? 2 : 0}
        >
          {mobileView && <DefaultNavbarMobile routes={routes} open={mobileNavbar} />}
        </MKBox>
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: "Makeupby_bellaaa",
  transparent: false,
  light: false,
  action: false,
  sticky: false,
  relative: false,
  center: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.shape).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "default",
        "white",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
};

export default DefaultNavbar;
