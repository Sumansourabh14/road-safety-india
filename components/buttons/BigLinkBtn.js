import Link from "next/link";
import { Button } from "../ui/button";

const BigLinkBtn = ({ url, title }) => {
  return (
    <Button asChild className="text-2xl px-16 py-8 hover:bg-gray-950">
      <Link href={url}>{title}</Link>
    </Button>
  );
};

export default BigLinkBtn;
