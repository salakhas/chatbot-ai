import {
  VscCommentDiscussion,
  VscLayers,
  VscChecklist,
  VscFileText,
} from "react-icons/vsc";
import Dock from "./Dock";

const TABS = [
  {
    id: 1,
    icon: "💬",
    dock_icon: <VscCommentDiscussion size={18} />,
    title: "Chat",
  },
  {
    id: 2,
    icon: "🃏",
    dock_icon: <VscLayers size={18} />,
    title: "Flashcards",
  },
  {
    id: 3,
    icon: "📝",
    dock_icon: <VscChecklist size={18} />,
    title: "Quiz",
  },
  {
    id: 4,
    icon: "📄",
    dock_icon: <VscFileText size={18} />,
    title: "Summarize",
  },
];

export default function MobileNav({ activeTab, setActiveTab }) {
  const items = TABS.map((tab) => ({
    ...tab,
    isActive: activeTab === tab.title.toLowerCase(),
    onClick: () => setActiveTab(tab),
  }));
  console.log(items, "items");
  return (
    <div className="relative md:hidden h-fit">
      <Dock
        items={items}
        panelHeight={64}
        baseItemSize={46}
        magnification={65}
      />
    </div>
  );
}
