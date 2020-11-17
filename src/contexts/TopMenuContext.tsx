import React, { Component, createContext } from 'react';

type topMenuContext = {
  isExpanded: boolean,
  isDocked: boolean,
  setIsExpanded: (value: boolean) => void,
  setIsDocked: (value: boolean) => void
}

const initialState = {
  isExpanded: false,
  isDocked: true
}

export const TopMenuContext = createContext<topMenuContext>({
  ...initialState,
  setIsExpanded: () => { },
  setIsDocked: () => { }
});

class TopMenuContextProvider extends Component {
  state = initialState;

  setIsExpanded = (value: boolean) => {
    this.setState({ ...this.state, isExpanded: value });
  }

  setIsDocked = (value: boolean) => {
    this.setState({ ...this.state, isDocked: value });
  }

  render() {
    return (
      <TopMenuContext.Provider value={{
        ...this.state,
        setIsExpanded: this.setIsExpanded,
        setIsDocked: this.setIsDocked
      }}>
        { this.props.children }
      </TopMenuContext.Provider>
    );
  }
}

export default TopMenuContextProvider;