type TabProps = {
  num: number;
  activeTab: number;
  onClick: (num: number) => void;
};

export default function Tab({ num, activeTab, onClick }: TabProps) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}
