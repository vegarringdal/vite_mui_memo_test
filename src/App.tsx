import { useState } from "react";
import { Sample1 } from "./sample1";
import { Sample2 } from "./sample2";

export default function GridVisualization() {
  const [sampleName, setSampleName] = useState("sample1");

  if (sampleName === "sample2") {
    return (
      <>
        <Buttons callback={(s) => setSampleName(s)}></Buttons>
        <Sample2></Sample2>
      </>
    );
  }

  return (
    <>
      <Buttons callback={(s) => setSampleName(s)}></Buttons>
      <Sample1></Sample1>
    </>
  );
}

export function Buttons(props: { callback: (sampleName: string) => void }) {
  return (
    <div>
      <button onClick={() => props.callback("sample1")}> Sample 1</button>
      <button onClick={() => props.callback("sample2")}> Sample 2</button>
    </div>
  );
}
