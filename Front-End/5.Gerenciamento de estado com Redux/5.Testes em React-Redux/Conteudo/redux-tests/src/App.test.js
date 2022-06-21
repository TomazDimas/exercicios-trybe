import React from "react";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import App from "./App";
import { createStore, combineReducers } from "redux";
import clickReducer from "./reducers";
import userEvent from "@testing-library/user-event";

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={ store }>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should habe a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  })

  test('if click turns to 1', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();

    userEvent.click(buttonAdicionar);

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('1')).toBeInTheDocument();
  })

  test('if the number changes with initialState', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    const buttonAdicionar = queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('6')).toBeInTheDocument();
  })
})