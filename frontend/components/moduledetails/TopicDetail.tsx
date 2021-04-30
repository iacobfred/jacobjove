import { TopicModule } from "@/interfaces";
import { FC } from "react";

interface TopicDetailProps {
  topic: TopicModule;
}

const TopicDetail: FC<TopicDetailProps> = ({ topic }: TopicDetailProps) => {
  let titleHtml = topic["name"];
  return (
    <>
      <h1 className="text-center card-title" dangerouslySetInnerHTML={{ __html: titleHtml }} />
      <div className="card-text">
        <div dangerouslySetInnerHTML={{ __html: topic["description"] }} />
      </div>
    </>
  );
};

export default TopicDetail;
