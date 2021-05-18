import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as React from "https://cdn.skypack.dev/react@17.0.1";

const DRUMPAD_LIST_1 = [
{ id: "Heater-1", key: "Q", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
{ id: "Heater-2", key: "W", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
{ id: "Heater-3", key: "E", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
{ id: "Heater-4", key: "A", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
{ id: "Heater-5", key: "S", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
{ id: "Heater-6", key: "D", audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
{ id: "Heater-7", key: "Z", audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
{ id: "Heater-8", key: "X", audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
{ id: "Heater-9", key: "C", audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];


const Pad = ({ id, keyChar, audio, onClickCallPad }) => {

  const onKeyDownHandler = event => {
    if (event.key.toUpperCase() == keyChar) {
      const audio = document.getElementById(keyChar);
      audio.play();
      onClickCallPad(id);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', onKeyDownHandler);
    return () => document.removeEventListener('keydown', onKeyDownHandler);
  });
  const onClick = () => {
    const audio = document.getElementById(keyChar);
    audio.play();
    onClickCallPad(id);
  };
  return /*#__PURE__*/(
    React.createElement("div", { class: "drum-pad", id: id, onClick: onClick }, /*#__PURE__*/
    React.createElement("audio", { class: "clip", id: keyChar, src: audio }), keyChar));


};

const DrumPad = ({ onClickCallPad }) => {
  return /*#__PURE__*/(
    React.createElement("div", { class: "pad-bank" },
    DRUMPAD_LIST_1.map(({ id, key, audio }) => /*#__PURE__*/React.createElement(Pad, { id: id, keyChar: key, audio: audio, onClickCallPad: onClickCallPad }))));


};

const Controls = ({ sound }) => {
  return /*#__PURE__*/(
    React.createElement("div", { class: "controls-container" }, /*#__PURE__*/
    React.createElement("div", { class: "power" }), /*#__PURE__*/
    React.createElement("p", { id: "display" }, sound), /*#__PURE__*/
    React.createElement("div", { class: "volume-slider" }), /*#__PURE__*/
    React.createElement("div", { class: "bank" })));


};

const App = () => {
  const [padSound, setPadSound] = React.useState();
  const padClick = React.useCallback(e => setPadSound(e), []);
  return /*#__PURE__*/(
    React.createElement("div", { class: "app", id: "drum-machine" }, /*#__PURE__*/
    React.createElement(DrumPad, { onClickCallPad: padClick }), /*#__PURE__*/
    React.createElement(Controls, { sound: padSound })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("main"));