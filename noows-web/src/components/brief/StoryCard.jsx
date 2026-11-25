import "./StoryCard.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { BriefContext } from "../../context/BriefProvider";

import BookmarkButton from "../common/BookmarkButton";

export default function StoryCard({ story }) {

  const navigate = useNavigate();

  const { toggleBookmark } =
    useContext(BriefContext);

    

  return (

    <article className="story-card">

      <div className="story-card__content">

        <h3 className="story-card__title">
          {story.title}
        </h3>

        <div className="story-card__section">

          <p className="story-card__label">
            💡 Why it matters
          </p>

          <p className="story-card__why">
            {story.whyItMatters}
          </p>

        </div>

      </div>

      <div className="story-card__footer">

        <span className="story-card__time">
          ⏱ {story.readingTime} sec
        </span>

        <div className="story-card__actions">

          <BookmarkButton
            saved={story.saved}
            onToggle={() =>
              toggleBookmark(story.id)
            }
          />

          <button
            className="story-card__button"
            onClick={() =>
              navigate(`/article/${story.id}`)
            }
          >
            Read More →
          </button>

        </div>

      </div>

    </article>

  );

}