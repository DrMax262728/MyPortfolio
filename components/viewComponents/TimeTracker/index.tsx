import * as React from "react";
// components
import TaskTable from "./components/TaskTable";
import TimerComponent from "./components/Timer";

const TimeTrackerComponent: React.FC = () => (
  <div>
    Time Tracker
    <TimerComponent />
    <TaskTable />
  </div>
);

export default TimeTrackerComponent;
