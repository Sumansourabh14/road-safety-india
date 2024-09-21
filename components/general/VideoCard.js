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
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { getVideoType } from "@/utils/utilFunctions";
import Player from "next-video/player";

const VideoCard = ({ id, title, body, url, location, incidentType }) => {
  return (
    <Card key={id} className="flex flex-col">
      <CardHeader>
        {!!url && <Player src={url} />}
        <CardTitle className="pt-2 text-lg">{title}</CardTitle>
      </CardHeader>
      <Link href={`/collection/${id}`}>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            {incidentType?.length > 0 && (
              <ToggleGroup
                variant="outline"
                type="multiple"
                className="flex flex-wrap justify-start"
                disabled
              >
                {incidentType.map((type) => (
                  <ToggleGroupItem key={type} value={type}>
                    {getVideoType(type)}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            )}
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
          </div>
        </CardContent>
        {!!location && (
          <CardFooter>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>{location}</p>
            </div>
          </CardFooter>
        )}
      </Link>
    </Card>
  );
};

export default VideoCard;
