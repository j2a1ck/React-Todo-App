/* eslint-disable react/prop-types */
export default function Todo({ task }) {
  return (
    <form className="list">
      <input type="checkbox"></input>
      <label>{task.text}</label>
    </form>
  );
}
