import MyFeed from "@/components/feed";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <MyFeed />
      <Separator className="my-10" />
      <Footer />
    </>
  );
}
