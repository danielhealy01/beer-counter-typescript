import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [volume, setVolume] = useState("pint");
  const [drinker, setDrinker] = useState("");
  const [total, setTotal] = useState(0);



  const handleSetVolumePint = () => {
    setVolume("pint");
  };

  const handleSetVolumeHalf = () => {
    setVolume("half");
  };

  const handleIncrease = () => {
    volume === "pint" ? setTotal(total + 1) : setTotal(total + 0.5);
  };

  const handleDecrease = () => {
    if (total > 0) {
      volume === "half" ? setTotal(total - 0.5) : total >= 1 ? setTotal(total - 1) : null;
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
          {total}
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
        <div className="avatar1" id="1" onClick={handleSetDrinker1}></div>
        <div className="avatar2" id="2"onClick={handleSetDrinker2}></div>
        <div className="avatar3" id="3" onClick={handleSetDrinker3}></div>
        <div className="avatar4" id="4" onClick={handleSetDrinker4}></div>
      </div>
    </div>
  );
}

export default App