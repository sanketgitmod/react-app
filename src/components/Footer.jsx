import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import classes from "./Footer.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 20,
        p: 10,
        backgroundColor: "black",
      }}
      className={classes.box}
    >
      <Grid container spacing={3}>
        <Grid item xs>
          <Typography color="white" component="span" variant="h6" gutterBottom>
            WEATHERAPP
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography fontSize={20} color="white">
                Home
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontSize={20} color="white">
                Contact us
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontSize={20} color="white">
                Cities
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontSize={20} color="white">
                FAQs
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography fontSize={20} color="white">
                News
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
