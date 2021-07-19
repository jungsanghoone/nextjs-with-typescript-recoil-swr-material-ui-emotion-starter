import { useSetRecoilState, useResetRecoilState, useRecoilState } from 'recoil';
import { countState, inputState, countInputState } from '../libs/recoil-atoms';

/**
useRecoilState : 기존 useState 와 같이 변경되는 값과 해당 값을 변경하는 함수를 반환합니다.
useRecoilValue : 구독하는 값만 반환하는 함수입니다. 값의 update 함수가 필요없을 경우 사용합니다.
useSetRecoilState : 구독하는 값을 변경하는 함수만 반환합니다.
useResetRecoilState: 값을 기본값으로 reset 시키는 함수를 반환합니다.

 * */
const Counter = (): JSX.Element => {
  const [count, setCount] = useRecoilState(countState);
  const setCountUseSetRecoilState = useSetRecoilState(countState);
  const resetCount = useResetRecoilState(countState);
  const [input, setInput] = useRecoilState(inputState); // useRecoilState 을 통한 value, setter 반환
  const [countInput, setCountInput] = useRecoilState(countInputState);
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <p>selector {countInput}</p>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCountUseSetRecoilState(count + 1)}>
        숫자 증가 (useSetRecoilState 사용)
      </button>
      <button onClick={() => setCountUseSetRecoilState(count - 1)}>
        숫자 감소 (useSetRecoilState 사용)
      </button>
      <button onClick={resetCount}>카운트 리셋</button>
      <button onClick={() => setCountInput('5000')}>
        selector 값 5000으로 변경
      </button>
    </div>
  );
};

export default Counter;
