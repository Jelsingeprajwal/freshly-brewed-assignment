import React from "react";
import PlaybackCard from "../components/PlaybackCard";

const Playback = () => {
  return (
    <section className="p-7">
      <h1>
        Our advanced recording system captures your interview sessions, allowing
        you to review and analyze your performance
      </h1>
      <div className="mt-4 flex flex-col gap-4">
        <PlaybackCard />
        <PlaybackCard />
        <PlaybackCard />
        <PlaybackCard />
        <PlaybackCard />
      </div>
    </section>
  );
};

export default Playback;
