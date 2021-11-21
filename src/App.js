import React from 'react';
import Die from './Die';
import { nanoid } from 'nanoid';
import { useStopwatch } from 'react-timer-hook';
import Confetti from 'react-confetti';

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [rolls, setRolls] = React.useState(0);
  const [highscore, setHighscore] = React.useState(
    JSON.parse(localStorage.getItem('highscore')) || { rolls: 0, time: '' }
  );
  const [time, setTime] = React.useState('');
  const { seconds, minutes, start, pause, reset } = useStopwatch({ autoStart: false });

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  React.useEffect(() => {
    if (tenzies) {
      pause();
      setTime(`${minutes}:${seconds}`);

      if ((rolls < highscore.rolls && time <= highscore.time) || highscore.rolls === 0) {
        setHighscore((prevScore) => ({
          ...prevScore,
          rolls: rolls,
          time: `${minutes}:${seconds}`,
        }));
      }
    }
  }, [tenzies, rolls, highscore, pause, minutes, seconds, time]);

  React.useEffect(() => {
    localStorage.setItem('highscore', JSON.stringify(highscore));
  }, [highscore]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (rolls === 0) {
      reset();
      start();
    }

    if (!tenzies) {
      setRolls((prevrolls) => prevrolls + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      reset();
      setTenzies(false);
      setDice(allNewDice());
      setRolls(0);
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      <div className='stats'>
        <div className='highscore'>
          Highscore:
          <br />
          {highscore.rolls > 0
            ? `${highscore.rolls} rolls in (${highscore.time})  minutes`
            : 'play your first game'}
          <br />
        </div>
        <div className='currentScore'>
          <span>
            {rolls !== 0 ? `Time: ${minutes}:${seconds}` : '(pre-roll thinking time)'}
          </span>
          <br />
          Rolls: {rolls}
        </div>
      </div>
      {tenzies && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>
        Roll until all dice are the same. Click each die to freeze it at its current value
        between rolls.
      </p>
      <div className='dice-container'>{diceElements}</div>
      <button className='roll-dice' onClick={rollDice}>
        {tenzies ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}
