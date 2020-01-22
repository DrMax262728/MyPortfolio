import * as React from "react";
// context
import { TaskTimerContext } from "containers/TimeTracker/layers/API";
// views
import { StartButton } from "./views";

const TimerComponent: React.FC = () => {
  const { time, handleStopTimer } = React.useContext(TaskTimerContext);

  return (
    <div>
      <StartButton onClick={handleStopTimer}>Start</StartButton>
      Time: {time}
    </div>
  );
};

export default TimerComponent;
