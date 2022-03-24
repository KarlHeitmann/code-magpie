import { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin.js";
import TheNavbar from '../misc/the_navbar';

export default function Invoices() {
  const boxRef = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  return (
    <>
      <TheNavbar />
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
        <div className="box" ref={boxRef}>Hello</div>
      </main>
    </>
  );
}
