import { FormEvent, MutableRefObject, useRef } from "react";
import { useActionsCost } from "../../hooks/useActionCost";
import "./Cost-form.css";

export default function FormCost() {
  const priceRef = useRef() as MutableRefObject<HTMLInputElement>;
  const dateRef = useRef() as MutableRefObject<HTMLInputElement>;
  const textRef = useRef() as MutableRefObject<HTMLInputElement>;

  const { fetchNewCost } = useActionsCost();
  const handlerForm = (e: FormEvent): void => {
    e.preventDefault();

    if (
      priceRef.current.value.trim().length > 1 &&
      dateRef.current.value.trim().length > 8 &&
      textRef.current.value.trim().length > 3
    ) {
      fetchNewCost({
        text: textRef.current.value,
        price: Number(priceRef.current.value),
        date: dateRef.current.value,
      });
    } else {
      return;
    }
  };

  return (
    <div className="costs-header">
      <form className="d-flex mb-3" onSubmit={handlerForm}>
        <div className="form-item">
          <span className="mb-3">Куда было потрачено:</span>
          <input ref={textRef} type="text" className="form-control" />
        </div>
        <div className="form-item">
          <span className="mb-3">Сколько было потрачено:</span>
          <input ref={priceRef} type="text" className="form-control" />
        </div>
        <div className="form-item">
          <span className="mb-3">Когда было потрачено:</span>
          <input ref={dateRef} type="date" className="form-control" />
        </div>
        <button className="btn btn-primary add-btn">Добавить</button>
      </form>
    </div>
  );
}
