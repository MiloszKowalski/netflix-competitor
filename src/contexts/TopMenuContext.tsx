import React, { Component, createContext } from 'react';

type topMenuContext = {
  isDocked: boolean,
  isExpanded: boolean,
  setIsDocked: (value: boolean) => void,
  setIsExpanded: (value: boolean) => void
}

const initialState = {
  isDocked: true,
  isExpanded: false
}

export const TopMenuContext = createContext<topMenuContext>({
  ...initialState,
  setIsDocked: () => { },
  setIsExpanded: () => { }
});

class TopMenuContextProvider extends Component {
  state = initialState;

  setIsDocked = (value: boolean) => {
    this.setState({ ...this.state, isDocked: value });
  }

  setIsExpanded = (value: boolean) => {
    this.setState({ ...this.state, isExpanded: value });
  }

  render() {
    return (
      <TopMenuContext.Provider value={{
        ...this.state,
        setIsDocked: this.setIsDocked,
        setIsExpanded: this.setIsExpanded
      }}>
        { this.props.children }
      </TopMenuContext.Provider>
    );
  }
}

export default TopMenuContextProvider;
