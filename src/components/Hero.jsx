import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import classes from "./Hero.module.css";
import moment from "moment";

function Hero() {
  const [city, setCity] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=fe4feefa8543e06d4f3c66d92c61b69c"
      );
      const responseData = response.json();
      return responseData;
    }

    getData().then((res) => setCity(res));
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const myStyle = {
    backgroundImage: "url('https://source.unsplash.com/tCAeh1Xs0Sw')",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.9,
  };

  return (
    <>
      <AppBar
        style={myStyle}
        sx={{ color: "black", backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            mx: "auto",
            mt: 3,
          }}
        >
          <Typography variant="h6" sx={{ p: 3 }} noWrap>
            Home
          </Typography>
          <Typography variant="h6" sx={{ p: 3 }} noWrap>
            Cities
          </Typography>
          <Typography variant="h6" sx={{ p: 3 }} noWrap>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        style={{ ...myStyle, zIndex: 9, opacity: "none" }}
        sx={{
          pt: 20,
          pb: 6,
          color: "black",
        }}
      >
        <Container sx={{ marginRight: 10 }} maxWidth="sm">
          <Card
            sx={{
              minWidth: 275,
              p: 4,
              borderRadius: 6,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Typography variant="h4" sx={{ p: 1, mb: 4 }} gutterBottom>
                Weather Details
              </Typography>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      boxShadow: "none",
                      textAlign: "left",
                      fontSize: 20,
                    }}
                  >
                    Cloudy
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      boxShadow: "none",
                      textAlign: "right",
                      fontSize: 20,
                    }}
                  >
                    {city?.clouds?.all}%
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      boxShadow: "none",
                      textAlign: "left",
                      fontSize: 20,
                    }}
                  >
                    Humidity
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      boxShadow: "none",
                      textAlign: "right",
                      fontSize: 20,
                    }}
                  >
                    {city?.main?.humidity}%
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      boxShadow: "none",
                      textAlign: "left",
                      fontSize: 20,
                    }}
                  >
                    Wind
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      boxShadow: "none",
                      textAlign: "right",
                      fontSize: 20,
                    }}
                  >
                    {city?.wind?.speed}km/h
                  </Item>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
        <Container
          className={classes.conta}
          sx={{ marginTop: 12 }}
          maxWidth="sm"
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="span" className={classes.deg}>
                {`${Math.floor(city?.main?.temp - 273)}`}&deg;
              </Typography>
              <Typography ml={2} component="span" className={classes.loc}>
                {city.name}
                <LightModeIcon
                  className={classes.icon}
                  sx={{ marginX: 3, marginY: -3 }}
                />
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                ml={5}
                sx={{ fontWeight: 600 }}
              >
                {moment().format("HH:mm")} {moment().format("dddd")}{" "}
                {new Date().toLocaleDateString("In")}
              </Typography>
            </CardContent>
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
