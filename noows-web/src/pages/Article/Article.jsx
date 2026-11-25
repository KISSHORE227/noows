import "./Article.css";

import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { BriefContext } from "../../context/BriefProvider";

export default function Article() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { stories } = useContext(BriefContext);

  const story = stories.find(
    (story) => story.id === Number(id)
  );

  if (!story) {
    return (
      <main className="article article--not-found">
        <h2>Story not found.</h2>

        <button
          className="article__back-button"
          onClick={() => navigate("/")}
        >
          ← Back Home
        </button>
      </main>
    );
  }

  return (
    <main className="article">

      <div className="article__container">

        {/* Back */}

        <button
          className="article__back-button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        {/* Header */}

        <header className="article__header">

          <h1 className="article__title">
            {story.title}
          </h1>
          <p className="article__source">
  Source: {story.source}
</p>

          <p className="article__meta">
            ⏱ {story.readingTime} sec read
          </p>

        </header>

        {/* Summary */}

        <section className="article__card">

          <h2 className="article__heading">
            📰 30 Second Summary
          </h2>

          <p className="article__text">
            {story.summary}
          </p>

        </section>

        {/* Why */}

        <section className="article__card">

          <h2 className="article__heading">
            💡 Why It Matters
          </h2>

          <p className="article__text">
            {story.whyItMatters}
          </p>

        </section>

        {/* Context */}

        <section className="article__card">

          <h2 className="article__heading">
            🧠 Context
          </h2>

          <p className="article__text">
            {story.context}
          </p>

        </section>

        {/* Next */}

        <section className="article__card">

          <h2 className="article__heading">
            🔮 What's Next?
          </h2>

          <p className="article__text">
            {story.whatsNext}
          </p>

        </section>

      </div>

    </main>
  );
}