import type { NextPage } from "next";
import { Cat } from "react-kawaii";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../app/store";
import { updateCatMood, MOODS } from "./api/mood";

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  const currentMood = useSelector((state: AppState) => state.mood);

  const handleMoodUpdate = (evt) => {
    const mood = evt.target.dataset.type;
    dispatch(updateCatMood(mood));
  };

  return (
    <div className="App">
      {" "}
      <Cat size={320} mood={currentMood} color="#596881" />
      <section>
        {Object.values(MOODS).map((mood) => (
          <button
            data-type={mood}
            key={mood}
            className={`${currentMood === mood ? "selected" : ""}`}
            onClick={handleMoodUpdate}
          >
            {mood}
          </button>
        ))}
      </section>
    </div>
  );
};

export default IndexPage;
