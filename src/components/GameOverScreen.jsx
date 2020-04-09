import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import Tilt from "react-tilt";

export function GameOverScreen(props) {
  return (
    <Container maxWidth="lg">
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        className="w-full h-full absolute inset-0"
      >
        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid item xs={8} sm={6}>
            <Card className="message">
              <CardContent className="text-gray-900 text-center text-3xl border-gray-600">
                <Grid container alignItems="center" justify="center">
                  <Grid item xs={12} className="bg-green-500 p-8">
                    You won!
                  </Grid>
                  <Grid item xs={6} className="title p-12">
                    {props.time} <span className="stat"> seconds</span>
                  </Grid>
                  <Grid item xs={6} className="title">
                    {props.moves} <span className="stat"> moves</span>
                  </Grid>
                  <Grid item xs={10}>
                    <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }}>
                      <div className="bg-green-500" onClick={props.restartGame}>
                        restart
                      </div>
                    </Tilt>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
