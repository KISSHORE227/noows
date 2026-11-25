import { createContext, useState, useEffect } from "react";

import { fetchNews, transformNews } from "../Api/NewsApi";

export const BriefContext = createContext();

export default function BriefProvider({ children }) {

  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // ⭐ Bookmark / Unbookmark
  const toggleBookmark = (id) => {

    setStories(currentStories =>
      currentStories.map(story => {

        if (story.id === id) {
          return {
            ...story,
            saved: !story.saved
          };
        }

        return story;
      })
    );

  };


  // 📰 Fetch news + restore saved stories
  useEffect(() => {

    const loadNews = async () => {

      try {

        const articles = await fetchNews();

        const formatted = transformNews(articles);


        // Get previously saved stories
        const savedStories = JSON.parse(
          localStorage.getItem("savedStories") || "[]"
        );


        // Merge saved status with fresh news
        const restoredStories = formatted.map(story => {

          const oldStory = savedStories.find(
            savedStory => savedStory.id === story.id
          );

          return {
            ...story,
            saved: oldStory ? oldStory.saved : false
          };

        });


        setStories(restoredStories);

        setError(null);

      } catch (error) {

        setError(error);

      } finally {

        setLoading(false);

      }

    };

    loadNews();

  }, []);


  // 💾 Save stories whenever they change
  useEffect(() => {

    if (stories.length > 0) {

      localStorage.setItem(
        "savedStories",
        JSON.stringify(stories)
      );

    }

  }, [stories]);


  return (
    <BriefContext.Provider
      value={{
        stories,
        loading,
        error,
        toggleBookmark
      }}
    >
      {children}
    </BriefContext.Provider>
  );
}