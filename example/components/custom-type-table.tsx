import React from "react";
import { CustomTask } from "../App";

const MyTaskListTableCustom: React.FC<{
  tasks: CustomTask[];
  onExpanderClick: (task: CustomTask) => void;
  ganttHeight: number;
  rowHeight: number;
  rowWidth: string;
  locale: string;
  selectedTaskId: string;
  horizontalContainerRef: React.RefObject<HTMLTableSectionElement>;
  setSelectedTask: (taskId: string) => void;
}> = ({
  tasks,
  onExpanderClick,
  ganttHeight,
  rowHeight,
  horizontalContainerRef,
  setSelectedTask,
}) => {
  return (
    <tbody
      ref={horizontalContainerRef}
      style={ganttHeight ? { maxHeight: ganttHeight } : {}}
    >
      {tasks.map(t => {
        let expanderSymbol = "";
        if (t.hideChildren === false) {
          expanderSymbol = "YES";
        } else if (t.hideChildren === true) {
          expanderSymbol = "NO";
        }

        return (
          <tr
            key={t.id}
            style={{ height: rowHeight }}
            onClick={() => setSelectedTask(t.id)}
          >
            <td>
              {expanderSymbol ? (
                <button type="button" onClick={() => onExpanderClick(t)}>
                  {expanderSymbol}
                </button>
              ) : null}
            </td>
            <td>
              <a href="#">Link to {t.name}</a>
            </td>
            <td>{t.hasExtraField ? "Wow!" : "Not Disabled"}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default MyTaskListTableCustom;
