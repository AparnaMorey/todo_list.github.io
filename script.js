import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function Todo() {
  const [tasks, setTasks] = React.useState([
  {
    text: "Task 1",
    done: true },

  {
    text: "Task 2",
    done: false },

  {
    text: "Task 3",
    done: false },

  {
    text: "Task 4",
    done: false }]);


  const [remainingTasks, setRemainingTasks] = React.useState(0);
  const addTaskInput = React.useRef();

  React.useEffect(() => {
    setRemainingTasks(
    tasks.filter(taskItem => taskItem.done === false).length);

  }, [tasks]);

  function addTask() {
    const newTask = addTaskInput.current.value;
    if (newTask && !tasks.some(task => task.text === newTask)) {
      const newTaskObj = {
        text: newTask,
        done: false };

      setTasks(tasks => {
        return [...tasks, newTaskObj];
      });
      addTaskInput.current.value = "";
      addTaskInput.current.focus();
    }
  }

  function handleKey({ keyCode, target }) {
    if (keyCode === 13) {
      addTask();
    } else {
      if (!tasks.some(task => task.text === target.value)) {
        addTaskInput.current.classList.remove("invalid");
      } else {
        addTaskInput.current.classList.add("invalid");
      }
    }
  }

  return /*#__PURE__*/(
    React.createElement("div", { className: "main" }, /*#__PURE__*/
    React.createElement("div", { className: "todo" }, /*#__PURE__*/
    React.createElement("div", { className: "todo-header" }, /*#__PURE__*/
    React.createElement("h1", null, "Todo List"), /*#__PURE__*/
    React.createElement("small", null,
    tasks.length > 0 && remainingTasks === 0 ?
    "All done! =D" : /*#__PURE__*/

    React.createElement(React.Fragment, null, "You have ", /*#__PURE__*/
    React.createElement("b", null, remainingTasks), " of ", /*#__PURE__*/React.createElement("b", null, tasks.length), " tasks remaining"))), /*#__PURE__*/





    React.createElement("div", { className: "todo-form" }, /*#__PURE__*/
    React.createElement("input", {
      ref: addTaskInput,
      type: "text",
      placeholder: "Add task...",
      onKeyUp: handleKey }), /*#__PURE__*/

    React.createElement("button", { onClick: addTask }, "+")), /*#__PURE__*/

    React.createElement("div", { className: "todo-body" }, /*#__PURE__*/
    React.createElement(List, { tasks: tasks, setTasks: setTasks })))));




}

const List = ({ tasks, setTasks }) => {
  if (tasks.length > 0) {
    return /*#__PURE__*/(
      React.createElement("ul", { className: "todo-list" },
      tasks.map((task, taskIndex) => {
        return /*#__PURE__*/(
          React.createElement(Task, {
            key: taskIndex,
            taskId: taskIndex,
            task: task,
            setTasks: setTasks }));


      })));


  }
  return /*#__PURE__*/(
    React.createElement("div", { className: "empty" }, /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/
    React.createElement("svg", { viewBox: "0 0 21 21", xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/
    React.createElement("g", {
      fill: "none",
      "fill-rule": "evenodd",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      transform: "translate(2.5 4.5)" }, /*#__PURE__*/

    React.createElement("path", { d: "m3.65939616 0h8.68120764c.4000282 0 .7615663.23839685.9191451.6060807l2.7402511 6.3939193v4c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-4l2.74025113-6.3939193c.15757879-.36768385.51911692-.6060807.91914503-.6060807z" }), /*#__PURE__*/
    React.createElement("path", { d: "m0 7h4c.55228475 0 1 .44771525 1 1v1c0 .55228475.44771525 1 1 1h4c.5522847 0 1-.44771525 1-1v-1c0-.55228475.4477153-1 1-1h4" })))), /*#__PURE__*/



    React.createElement("p", null, /*#__PURE__*/
    React.createElement("b", null, "Empty list")), /*#__PURE__*/

    React.createElement("p", null, "Add a new task above")));


};

const Task = ({ taskId, task, setTasks }) => {
  function removeTask() {
    setTasks(tasks => {
      return tasks.filter((taskItem, taskIndex) => taskIndex !== taskId);
    });
  }

  function toggleTask() {
    const doneStatus = !task.done;
    setTasks(tasks => {
      return tasks.map((taskItem, taskIndex) => {
        if (taskIndex === taskId) {
          return {
            text: task.text,
            done: doneStatus };

        }
        return taskItem;
      });
    });
  }

  const prefixClass = "task-item";
  const doneClass = task.done ? " done" : "";

  return /*#__PURE__*/(
    React.createElement("li", { className: prefixClass + doneClass }, /*#__PURE__*/
    React.createElement("div", { className: prefixClass + "-infos" }, /*#__PURE__*/
    React.createElement("label", { className: prefixClass + "-checkbox" }, /*#__PURE__*/
    React.createElement("input", { type: "checkbox", onChange: toggleTask, checked: task.done }), /*#__PURE__*/
    React.createElement("div", { className: prefixClass + "-checkbox-el" })), /*#__PURE__*/

    React.createElement("div", { className: prefixClass + "-text" }, task.text)), /*#__PURE__*/

    React.createElement("div", { className: prefixClass + "-remove" }, /*#__PURE__*/
    React.createElement("button", { onClick: removeTask, title: "Remover item" }, /*#__PURE__*/
    React.createElement("svg", {
      height: "21",
      viewBox: "0 0 21 21",
      width: "21",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("g", {
      fill: "none",
      "fill-rule": "evenodd",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      transform: "translate(5 5)" }, /*#__PURE__*/

    React.createElement("path", { d: "m10.5 10.5-10-10z" }), /*#__PURE__*/
    React.createElement("path", { d: "m10.5.5-10 10" })))))));






};

ReactDOM.render( /*#__PURE__*/
React.createElement(Todo, null),
document.getElementById("root"));