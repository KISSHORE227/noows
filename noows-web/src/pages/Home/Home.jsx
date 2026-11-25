import "./Home.css";

import Greetings from "../../components/greeting/Greetings";
import Brief from "../../components/brief/Brief";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../../components/common/ThemeToggle";
import { useContext } from "react";
import { BriefContext } from "../../context/BriefProvider";

export default function Home() {

  const { loading } = useContext(BriefContext);
  const navigate = useNavigate();

  if (loading) {
    return <p>Loading today's brief...</p>;
  }

  return (
    <main className="home">

      <header className="home__header">

        <div className="home__brand">
          <span>Noows</span>
        </div>

        <div className="home__actions">
          <ThemeToggle />

          <button
            className="home__saved-button"
            onClick={() => navigate("/saved")}
          >
            ⭐ Saved
          </button>
        </div>

      </header>


      <section className="home__hero">
        <Greetings />
      </section>


      <section className="home__brief">
        <Brief />
      </section>

    </main>
  );
}