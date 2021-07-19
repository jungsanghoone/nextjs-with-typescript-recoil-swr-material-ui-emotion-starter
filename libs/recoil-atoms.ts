import { atom, selector } from 'recoil';

export const countState = atom({
  key: 'count',
  default: 0,
});

export const inputState = atom({
  key: 'inputState',
  default: '',
});

export const countInputState = selector({
  key: 'countTitleState',
  get: ({ get }) => {
    return `현재 카운트는 ${get(countState)}이고 입력값은 ${get(
      inputState,
    )}입니다.`;
  },
  set: ({ set }, newValue) => {
    set(countState, Number(newValue));
    set(inputState, newValue + '');
  },
});
