import * as React from "react";
// layers
import TimeTrackerAPI from "./layers/API";
// components
import TimeTrackerComponent from "components/viewComponents/TimeTracker";

const TimeTrackerContainer: React.FC = () => (
  <TimeTrackerAPI>
    <TimeTrackerComponent />
  </TimeTrackerAPI>
);

export default TimeTrackerContainer;
