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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import WhatsappCard from "examples/Cards/FeaturesCard/WhatsappCard";
import CatalogCard from "examples/Cards/FeaturesCard/CatalogCard";
import InstagramCard from "examples/Cards/FeaturesCard/InstagramCard";
import ImageShow from "components/MKImageShow";

import imageSample from "../../../assets/images/bg-presentation.jpg";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <ImageShow
              image={imageSample}
              title="Paket Wisuda"
              description="MakeUp Simple dan Modern, cocok untuk perayaan wisuda kamu seharian penuh"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <CatalogCard
              title="Catalog Harga"
              description="Mix the sections, change the colors and unleash your creativity"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <InstagramCard
              title="Gallery Collection"
              description="Save 3-4 weeks of work when you use our pre-made pages for your website"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <WhatsappCard
              title="Hubungi Kami"
              description="Mix the sections, change the colors and unleash your creativity"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <CatalogCard
              title="Catalog Harga"
              description="Mix the sections, change the colors and unleash your creativity"
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <InstagramCard
              title="Gallery Collection"
              description="Save 3-4 weeks of work when you use our pre-made pages for your website"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
