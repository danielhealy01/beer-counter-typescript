import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [volume, setVolume] = useState("pint");
  const [drinker, setDrinker] = useState("");

  const [drinker1Total, setDrinker1Total] = useState(0)
  const [drinker2Total, setDrinker2Total] = useState(0);
  const [drinker3Total, setDrinker3Total] = useState(0);
  const [drinker4Total, setDrinker4Total] = useState(0);

  const handleSetVolumePint = () => {
    setVolume("pint");
  };

  const handleSetVolumeHalf = () => {
    setVolume("half");
  };

  const handleIncrease = () => {
    if (drinker === 'drinker1') {
      volume === "pint"
        ? setDrinker1Total(drinker1Total + 1)
        : setDrinker1Total(drinker1Total + 0.5);
    }

    if (drinker === "drinker2") {
      volume === "pint"
        ? setDrinker2Total(drinker2Total + 1)
        : setDrinker2Total(drinker2Total + 0.5);
    }

    if (drinker === "drinker3") {
      volume === "pint"
        ? setDrinker3Total(drinker3Total + 1)
        : setDrinker3Total(drinker3Total + 0.5);
    }

    if (drinker === "drinker4") {
      volume === "pint"
        ? setDrinker4Total(drinker4Total + 1)
        : setDrinker4Total(drinker4Total + 0.5);
    }    
  };

  const handleDecrease = () => {
    if (drinker === 'drinker1') {
      if (drinker1Total > 0) {
        volume === "half"
          ? setDrinker1Total(drinker1Total - 0.5)
          : drinker1Total >= 1
          ? setDrinker1Total(drinker1Total - 1)
          : null;
      }
    }

    if (drinker === 'drinker2') {
      if (drinker2Total > 0) {
        volume === "half"
          ? setDrinker2Total(drinker2Total - 0.5)
          : drinker2Total >= 1
          ? setDrinker2Total(drinker2Total - 1)
          : null;
      }
    }

    if (drinker === "drinker3") {
      if (drinker3Total > 0) {
        volume === "half"
          ? setDrinker3Total(drinker3Total - 0.5)
          : drinker3Total >= 1
          ? setDrinker3Total(drinker3Total - 1)
          : null;
      }
    }

    if (drinker === "drinker4") {
      if (drinker4Total > 0) {
        volume === "half"
          ? setDrinker4Total(drinker4Total - 0.5)
          : drinker4Total >= 1
          ? setDrinker4Total(drinker4Total - 1)
          : null;
      }
    }

  };

  const handleSetDrinker1 = () => {
    setDrinker("drinker1");
    const drinker1 = document.getElementById("1");
    const drinker2 = document.getElementById("2");
    const drinker3 = document.getElementById("3");
    const drinker4 = document.getElementById("4");
    drinker1?.classList.add('avatar1Active')
    drinker2?.classList.remove("avatarActive")
    drinker3?.classList.remove("avatarActive")
    drinker4?.classList.remove("avatarActive")
  };

  const handleSetDrinker2 = () => {
    setDrinker("drinker2");
    const drinker1 = document.getElementById("1");
    const drinker2 = document.getElementById("2");
    const drinker3 = document.getElementById("3");
    const drinker4 = document.getElementById("4");
    drinker1?.classList.remove("avatar1Active");
    drinker2?.classList.add("avatarActive");
    drinker3?.classList.remove("avatarActive");
    drinker4?.classList.remove("avatarActive");
  };

  const handleSetDrinker3 = () => {
    setDrinker("drinker3");
    const drinker1 = document.getElementById("1");
    const drinker2 = document.getElementById("2");
    const drinker3 = document.getElementById("3");
    const drinker4 = document.getElementById("4");
    drinker1?.classList.remove("avatar1Active");
    drinker2?.classList.remove("avatarActive");
    drinker3?.classList.add("avatarActive");
    drinker4?.classList.remove("avatarActive");
  };

  const handleSetDrinker4 = () => {
    setDrinker("drinker4");
    const drinker1 = document.getElementById("1");
    const drinker2 = document.getElementById("2");
    const drinker3 = document.getElementById("3");
    const drinker4 = document.getElementById("4");
    drinker1?.classList.remove("avatar1Active");
    drinker2?.classList.remove("avatarActive");
    drinker3?.classList.remove("avatarActive");
    drinker4?.classList.add("avatarActive");
  };

  return (
    <div className="background">
      <div className="container">
        <p className="counter" id="counter">
          {drinker.length === 0 ? "Time for a beer?" : null}
          {drinker === "drinker1" ? drinker1Total : null}
          {drinker === "drinker2" ? drinker2Total : null}
          {drinker === "drinker3" ? drinker3Total : null}
          {drinker === "drinker4" ? drinker4Total : null}
        </p>
        <div className="btnContainer">
          <div className="btn minus" onClick={handleDecrease}>
            -
          </div>
          <div className="btn plus" onClick={handleIncrease}>
            +
          </div>
        </div>
        <div className="incrementContainer">
          <div className="incSpan">Increment the value by: </div>

          {volume === "pint" ? (
            <>
              <div className="btn volBtnActive" onClick={handleSetVolumePint}>
                Pint
              </div>
              <div className="btn volBtnInactive" onClick={handleSetVolumeHalf}>
                Half
              </div>
            </>
          ) : (
            <>
              <div className="btn volBtnInactive" onClick={handleSetVolumePint}>
                Pint
              </div>
              <div className="btn volBtnActive" onClick={handleSetVolumeHalf}>
                Half
              </div>
            </>
          )}
        </div>
      </div>
      <div className="avatarContainer">
        <div className="avatar1" id="1" onClick={handleSetDrinker1}>
          <div className="emojiContainer">
            {drinker1Total > 0 ? drinker1Total : null} &#127866;
          </div>
        </div>
        <div className="avatar2" id="2" onClick={handleSetDrinker2}>
          <div className="emojiContainer">
            {drinker2Total > 0 ? drinker2Total : null} &#127866;
          </div>
        </div>
        <div className="avatar3" id="3" onClick={handleSetDrinker3}>
          <div className="emojiContainer">
            {drinker3Total > 0 ? drinker3Total : null} &#127866;
          </div>
        </div>
        <div className="avatar4" id="4" onClick={handleSetDrinker4}>
          <div className="emojiContainer">
            {drinker4Total > 0 ? drinker4Total : null} &#127866;
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
