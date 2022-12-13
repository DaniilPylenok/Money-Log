import "./Spinner.css";

interface ISpinner {
  top: number;
  left: number;
}

export default function Spinner({ top, left }: ISpinner) {
  return (
    <div
      style={{ top: `${top}px`, left: `${left}px` }}
      className="spinner-border main-spinner"
      role="status"
    />
  );
}
