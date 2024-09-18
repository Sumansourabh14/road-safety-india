import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const VideoCard = ({ id, title, body, url, location }) => {
  return (
    <Card key={id} className="flex flex-col">
      <CardHeader>
        <Link href={`/collection/${id}`}>
          {!!url && (
            <video preload="auto" className="rounded-sm">
              <source src={url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Link>
        <CardTitle className="pt-2 text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
          className="text-md"
        >
          {body}
        </p>
      </CardContent>
      {!!location && (
        <CardFooter>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>{location}</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default VideoCard;
