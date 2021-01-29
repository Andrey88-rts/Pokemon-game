<<<<<<< HEAD
import styled from "./style.module.css"

export default function Header({ title, descr }) {
  return (
    <header className={styled.root}>
      <div className={styled.forest}></div>
      <div className={styled.container}>
        <h1>{title || "Not title"}</h1>
        <p>{descr || "Not descr"}</p>
      </div>
    </header>
=======

import styled from './style.module.css';

export default function Header(props) {
  const { title, descr } = props;
  const isProps = true;
  return (
    <>
      <header className={styled.root}>
        <div className={styled.forest}></div>
        <div className={styled.container}>
          <h1>{isProps && title}</h1>
          <p>{isProps && descr}</p>
        </div>
      </header>
    </>
>>>>>>> main
  )
}