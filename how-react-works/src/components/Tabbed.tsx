import { useState } from "react";
import type { ContentItem } from "../types/types";
import Tab from "./Tab";
import TabContent from "./TabContent";
import DifferentContent from "./DifferentContent";

interface TabbedProps {
  content: ContentItem[];
}

export default function Tabbed({ content }: TabbedProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent
          item={content.at(activeTab)!}
          key={content.at(activeTab)!.summary}
        />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}
