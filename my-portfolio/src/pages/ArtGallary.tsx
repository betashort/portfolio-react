import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import blogImage from "../assets/images/blog-image.png";
import portfolioImage from "../assets/images/portfolio-react.png";
import sleepAppImage from "../assets/images/sleep.png";
import MHDAppImage from "../assets/images/MHD-image.png"

function ArtGallary() {
  return (
    <>
      <div className="w-full h-svh grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="m-4">
          <Card sx={{ maxWidth: 400, height: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                alt="green iguana"
                src={blogImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tech Blog
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  テックブログ書いています。
                  分野は、データサイエンス・アプリ開発系です。
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://betashort-lab.com/"
              >
                Move
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="m-4">
          <Card sx={{ maxWidth: 400, height: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                alt="green iguana"
                src={portfolioImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  【練習用】Reactデモアプリ
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  reactの勉強のため、練習問題程度のアプリケーションを作成しています。
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://betashort.github.io/react_demo/"
              >
                Move
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="slee-check-app m-4">
          <Card sx={{ maxWidth: 400, height: 400}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                alt="green iguana"
                src={sleepAppImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  睡眠記録アプリ
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  睡眠時間を日記形式で管理するアプリです。
                  作成中です。
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://sleep-check-app.betashort-lab.com/"
              >
                Move
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="mental-health-app m-4">
          <Card sx={{ maxWidth: 400, height: 400}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                alt="green iguana"
                src={MHDAppImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  メンタルヘルス日記アプリ
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  メンタルヘルス・気分を記録するためのアプリです。
                  作成中です。
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://mhd-app.betashort-lab.com"
              >
                Move
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ArtGallary;
