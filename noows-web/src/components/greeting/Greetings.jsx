import "./Greetings.css";

export default function Greetings() {

  const hour = new Date().getHours();

  let greeting = "";
  let subtitle=" "; 

  if (hour < 12) {
  greeting = "Good Morning 🌅";
 subtitle = "Start your day informed.";
}
else if (hour < 17) {
 greeting = "Good Afternoon 🌞";
subtitle = "Catch up on today's biggest stories.";
}
else if (hour < 21) {
  greeting = "Good Evening 🌇";
subtitle = "Here's what happened today.";
}
else {
 greeting = "Good Night 🌙";
 subtitle = "See you with tomorrow's brief.";
}

  return (
    <header className="greeting">
      <div className="greeting__content">

        <p className="greeting__time">
          {greeting}
        </p>
        <p className="greeting__subtitle">
  {subtitle}
</p>
        <h1 className="greeting__title">
          Know what matters today.
        </h1>

        <p className="greeting__subtitle">
          Read fewer stories. Understand more.
        </p>

      </div>
    </header>
  );
}