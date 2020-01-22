import * as React from "react";

interface ITaskTimerContext {
  time: number;
  handleStopTimer: () => void;
}

export const TaskTimerContext = React.createContext<ITaskTimerContext>({
  time: 0,
  handleStopTimer: () => {}
});

const TimeTrackerAPI: React.FC = ({ children }) => {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  }, [time]);

  const handleStopTimer = () => {
    setTime(0);
  };

  return (
    <TaskTimerContext.Provider value={{ time, handleStopTimer }}>
      {children}
    </TaskTimerContext.Provider>
  );
};

export default TimeTrackerAPI;
