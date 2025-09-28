// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import { IconButton } from "@mui/material";
import MenuBook from "@mui/icons-material/MenuBook";

import { Link } from "react-router-dom";

function CatalogCard({ color, title, description }) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant="h1" color={color} textGradient>
        <IconButton
          component={Link}
          to="/catalog"
          sx={{
            fontSize: "64px",
            color: "#4b5bd7ff", // WhatsApp green
            "&:hover": { color: "#2921c1ff" },
          }}
        >
          <MenuBook />
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

// Setting default props for the CatalogCard
CatalogCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
};

// Typechecking props for the CatalogCard
CatalogCard.propTypes = {
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

export default CatalogCard;
