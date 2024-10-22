let parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", { id: "headingg" }, "hello world in heading1"),React.createElement("h2", { id: "headingg" }, "hello world in heading2")]
      ),
      React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", { id: "headingg" }, "hello world in heading1"),React.createElement("h2", { id: "headingg" }, "hello world in heading2")]
      )
  ]
);
let parent2 = React.createElement("div",{id:"parent2"},[
    React.createElement("h2",{id:"hedingg2"},"Hi sonna pothum")
])


let heading = React.createElement("h1", {}, "Hello world!!!");
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent2);
