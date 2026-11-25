import "./Saved.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BriefContext } from "../../context/BriefProvider";

export default function Saved() {

    const navigate = useNavigate();

    const { stories } = useContext(BriefContext);

    const savedStories = stories.filter(
        (story) => story.saved
    );

    return (

        <main className="saved">

            <div className="saved__container">

                <button
                    className="saved__back"
                    onClick={() => navigate("/")}
                >
                    ← Back
                </button>

                <h1 className="saved__title" onClick={() => toggleBookMark()}>
    ⭐ Saved Stories
</h1>

                {
                    savedStories.length === 0 ?

                        (

                            <div className="saved__empty">

                                <h2>No saved stories yet.</h2>

                                <p>
                                    Bookmark stories from today's brief and they'll appear here.
                                </p>

                            </div>

                        )

                        :

                        (

                            <div className="saved__list">

                                {

                                    savedStories.map((story) => (

                                        <article
                                            key={story.id}
                                            className="saved__card"
                                        >

                                            <h2>
                                                {story.title}
                                            </h2>

                                            <p>
                                                {story.whyItMatters}
                                            </p>

                                            <button

                                                className="saved__button"

                                                onClick={() =>
                                                    navigate(`/article/${story.id}`)
                                                }

                                            >
                                                Read More →
                                            </button>

                                        </article>

                                    ))

                                }

                            </div>

                        )

                }

            </div>

        </main>

    );

}