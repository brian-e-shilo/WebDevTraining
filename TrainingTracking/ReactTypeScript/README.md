# React + TypeScript basic app

This project is a practice exercise where I explored **React hooks** using TypeScript and Parcel bundler.

## What I learnt
- Setting up a React + TypeScript project
- Using and understanding different **React Hooks** and how to basically use **props**:
  - **useState** - to store the app title (`Brian's Kitchen`)
  - **useReducer** - to manage counter state with actions (`increment`, `decrement`, `reset`)
  - **useEffect** - to update the browser tab title whenever the counter changes
  - **useMemo** - to memoize an expensive calculation(value) (`doubleCount`)
  - **useCallback** - to memoize a function (`resetTwice` that decrements twice)
- Creating and composing React components:
  - `Header`
  - `Counter`
  - `ColorPicker`
  - `Footer`

## Features in this project
- Counter with increment, decrement, and reset
- Title updates dynamically with `ColorPicker`
- Browser tab shows the current counter
- Demonstration of memoization with `useMemo` and `useCallback`
