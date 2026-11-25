import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './briefReader.css'
import { BriefContext } from "../../context/BriefProvider";

export default function BriefReader() {
  const { stories } = useContext(BriefContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();a

  if (stories.length === 0) {
    return (
      <main className="brief-reader">
        <h1>No stories available.</h1>

        <button onClick={() => navigate("/")}>
          ← Back Home
        </button>
      </main>
    );
  }

  const story = stories[currentIndex];

  const isLastStory = currentIndex === stories.length - 1;

  function handleNext() {
    if (!isLastStory) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <main className="brief-reader">

      <button
        className="brief-reader__back"
        onClick={() => navigate("/")}
      >
        ← Back
      </button>

      <p className="brief-reader__progress">
        Story {currentIndex + 1} of {stories.length}
      </p>

      <h1 className="brief-reader__title">
        {story.title}
      </h1>

      <p className="brief-reader__source">
        Source: {story.source}
      </p>

      <section className="brief-reader__section">
        <h2>📰 30 Second Summary</h2>
        <p>{story.summary}</p>
      </section>

      <section className="brief-reader__section">
        <h2>💡 Why It Matters</h2>
        <p>{story.whyItMatters}</p>
      </section>

      <section className="brief-reader__section">
        <h2>🧠 Context</h2>
        <p>{story.context}</p>
      </section>

      <section className="brief-reader__section">
        <h2>🔮 What's Next?</h2>
        <p>{story.whatsNext}</p>
      </section>

      <div className="brief-reader__navigation">

        <button
          onClick={handleNext}
          disabled={isLastStory}
        >
          {isLastStory ? "Brief Complete ✓" : "Next Story →"}
        </button>

      </div>

    </main>
  );
}

