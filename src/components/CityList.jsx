import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Paper,
  Box,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CityList() {
  const [citys, setCitys] = useState([]);

  useEffect(() => {
    const urls = [
      "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=fe4feefa8543e06d4f3c66d92c61b69c",
      "https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=fe4feefa8543e06d4f3c66d92c61b69c",
      "https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=fe4feefa8543e06d4f3c66d92c61b69c",
    ];

    const requests = urls.map((url) => fetch(url));

    Promise.all(requests)
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        setCitys(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container sx={{ pt: 115 }} maxWidth="md">
      <Typography
        sx={{
          mx: "auto",
          width: 200,
          fontWeight: 600,
        }}
        gutterBottom
        variant="h3"
        component="h2"
      >
        Cities
      </Typography>
      <Grid container spacing={4}>
        {citys.map((city) => (
          <Grid item key={city.name} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url("https://source.unsplash.com/tCAeh1Xs0Sw")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "250px",
                  position: "relative",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    top: "85%",
                    left: "10%",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  {city.weather[0].main}
                </Typography>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={6}>
                    <Item
                      sx={{
                        boxShadow: "none",
                        textAlign: "left",
                        fontSize: 20,
                        color: "black",
                      }}
                    >
                      <Typography component="span" variant="h2">
                        {`${Math.floor(city?.main?.temp - 273)}`}&deg;
                      </Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item
                      sx={{
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        boxShadow: "none",
                        textAlign: "left",
                        marginTop: 1,
                      }}
                    >
                      <Typography
                        sx={{ color: "black", fontWeight: 600 }}
                        component="span"
                      >
                        {city.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="black"
                        component="div"
                        sx={{ fontWeight: 400 }}
                      >
                        {new Date().toLocaleDateString("In")}
                      </Typography>
                    </Item>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CityList;
