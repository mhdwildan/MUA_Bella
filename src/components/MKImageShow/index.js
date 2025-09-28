import { Card, CardContent, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import SmallWhatappCard from "examples/Cards/FeaturesCard/SmallWhatsappCard";

function ImageShow({ image, title, description, harga }) {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        width: "100%",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: 250,
          objectFit: "cover",
        }}
      />

      {/* Text Overlay */}
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.6)", // dark overlay background
        }}
      >
        <Grid container alignItems="center" sx={{ mt: -0.5, mb: -2.5 }}>
          <Grid item xs={8} sx={{ textAlign: "left" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#fff", fontSize: "19px" }}>
              {title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#fff", fontSize: "14px" }}>
              {description}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#fff", fontSize: "14px" }}>
              Start:&ensp;
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(harga)}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <SmallWhatappCard title="Pesan Sekarang" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

// Setting default values for the props of ImageShow
ImageShow.defaultProps = {
  image: "https://via.placeholder.com/400x250",
  title: "Default Title",
  description: "Default description text goes here.",
  harga: "250000",
};

// Typechecking props for ImageShow
ImageShow.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  harga: PropTypes.number,
};

export default ImageShow;
