import React from "react";
import Grid from "@material-ui/core/Grid";
import Tilt from "react-tilt";
import Flip from "react-reveal/Flip";
import { CardMedia } from "@material-ui/core";
import bgImg from "./images/bg.jpg";
import Card from "@material-ui/core/Card";
import Shake from "react-reveal/Shake";

export default function MemoryCard({ card, onClick, landscape }) {
  return (
    <Grid item className={landscape ? "w-1/6" : "w-1/3"}>
      <Tilt options={{ max: 15, scale: 1.05 }}>
        <Flip left spy={card.faceUp} duration={300}>
          <Shake spy={card.solved}>
            <Card
              onClick={
                card.solved || card.faceUp
                  ? null
                  : () => {
                      onClick(card.id);
                    }
              }
              style={{ paddingTop: landscape ? "27vh" : "13vh" }}
              className="relative"
            >
              <CardMedia
                image={card.faceUp ? card.pic : bgImg}
                className="absolute inset-0 h-z w-full object-cover"
                alt="robot"
              />
            </Card>
          </Shake>
        </Flip>
      </Tilt>
    </Grid>
  );
}
