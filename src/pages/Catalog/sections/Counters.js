import { useEffect, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import ImageShow from "components/MKImageShow";

import img1 from "assets/images/MUA_Bella1.jpg";
import img2 from "assets/images/MUA_Bella2.jpg";
import img3 from "assets/images/MUA_Bella3.jpg";
import img4 from "assets/images/MUA_Bella4.jpg";
import img5 from "assets/images/MUA_Bella5.jpg";
import img6 from "assets/images/MUA_Bella6.jpg";

function Counters() {
  const [rows, setRows] = useState([]);

  const images = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/1qsIF7dKsI9t7guj9U_fCGmSXGkt2i-7qjbsZLBJrfAE/gviz/tq?tqx=out:json"
      );
      const text = await res.text();
      const json = JSON.parse(text.substr(47).slice(0, -2)); // clean JSON
      const data = json.table.rows.map((row) => row.c.map((cell) => (cell ? cell.v : "")));
      setRows(data);
    };
    fetchData();
  }, []);
  return (
    <MKBox component="section" py={3}>
      <Container>
        <MKTypography
          variant="h3"
          color="dark"
          mt={-2}
          mb={0.5}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["2xl"],
            },
          })}
        >
          MakeUp Catalog
        </MKTypography>
        <Grid container item xs={{ mx: "auto" }} lg={{ mx: "auto" }} sx={{ mx: "auto" }}>
          {rows.map((row, i) => (
            <Grid item xs={12} md={4} sx={{ mt: 1, mb: 1 }} key={i}>
              <ImageShow image={images[i]} title={row[0]} description={row[1]} harga={row[2]} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
