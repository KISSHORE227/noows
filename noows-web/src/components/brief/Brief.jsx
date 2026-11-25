import "./Brief.css";

import { useContext } from "react";
import { BriefContext } from "../../context/BriefProvider";

import StoryCard from "./StoryCard";
import { useNavigate } from "react-router-dom";

export default function Brief() {

  const { stories, loading, error } = useContext(BriefContext);

  const totalStories = stories.length;

  const totalReadingTime = totalStories * 30;

  const minutes = Math.ceil(totalReadingTime / 60);

  const navigate = useNavigate();

  // Loading state
  if (loading) {
    return (
      <section className="brief">
        <h2 className="brief__title">
          Loading today's brief...
        </h2>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="brief">
        <h2 className="brief__title">
          There's a problem loading the news.
        </h2>

        <p>
          Please try again later.
        </p>
      </section>
    );
  }

  // Normal / success state
  return (
    <section className="brief">

      <div className="brief__header">

        <p className="brief__meta">
          {totalStories}{" "}
          {totalStories === 1 ? "Story" : "Stories"}
          {" • "}
          {minutes} min
        </p>

        <button
          className="brief__button"
          onClick={() => navigate("/brief")}
        >
          Start Reading
        </button>

      </div>

      <div className="brief__stories">

        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
          />
        ))}

      </div>

    </section>
  );
}