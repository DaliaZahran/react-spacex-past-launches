import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { IoMdRocket } from "react-icons/io";
import { Launch } from "../../types/LaunchList";
import Chip from "@mui/material/Chip";
import { MdAccessTime } from "react-icons/md";
import "./LaunchCard.css";

type CardProps = {
  launch?: Launch;
};

const LaunchCard: React.FC<CardProps> = (props: CardProps) => {
  const launch = props.launch;
  return (
    <Card className="card">
      <CardContent>
        <h3 className="card-title">{launch?.mission_name}</h3>
        <div>
          <span className="rocket">
            <IoMdRocket />
            {launch?.rocket.rocket_name}
          </span>
          <Chip
            label={new Date(launch?.launch_date_utc ?? "").toUTCString()}
            variant="outlined"
            color="warning"
            size="small"
            icon={<MdAccessTime />}
          />
        </div>
      </CardContent>
      <CardActions disableSpacing sx={{ mt: "auto" }} className="card-actions">
        <a
          href={launch?.links.video_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="small">Video</Button>
        </a>
        <a
          href={launch?.links.article_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="small">Details</Button>
        </a>
      </CardActions>
    </Card>
  );
};
export default LaunchCard;
