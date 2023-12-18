import DescriptionCard from "@/components/DescriptionCard";
import ProfileCard from "@/components/ProfileCard";
import ContentTabs from "@/components/ContentTabs";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="mt-24 mx-2 sm:mx-4 mb-24 flex flex-col gap-8 w-[940px]">
        <ProfileCard />
        <DescriptionCard />
        <ContentTabs />
      </div>
    </main>
  );
}
