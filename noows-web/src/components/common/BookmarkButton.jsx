import "./BookmarkButton.css";

export default function BookmarkButton({
  saved,
  onToggle,
}) {
  return (
    <button
      className="bookmark-button"
      onClick={onToggle}
    >
      {saved ? "⭐" : "☆"}
    </button>
  );
}