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

function NewsList() {
  const cards = [
    "Thunder Strikes Delhi",
    "Cloudstorms in manipur",
    "It's Summer season in Mumbai",
  ];
  return (
    <Container sx={{ pt: 5 }} maxWidth="md">
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
        News
      </Typography>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 5,
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url("https://source.unsplash.com/tCAeh1Xs0Sw")`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "360px",
                  position: "relative",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    position: "absolute",
                    top: "75%",
                    left: "5%",
                    color: "white",
                    fontWeight: 600,
                    fontSize: 24,
                  }}
                >
                  {card}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NewsList;
