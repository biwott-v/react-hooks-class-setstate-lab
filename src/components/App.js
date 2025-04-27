import React from 'react';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false
    };
  }

  handleDarkModeClick = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode
    }));
  };

  render() {
    return (
      <div className={`App ${this.state.isDarkMode ? "dark" : "light"}`}>
        <header>
          <h2>Shopster</h2>
          <button onClick={this.handleDarkModeClick}>
            {this.state.isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
        <ShoppingList items={itemData} />
      </div>
    );
  }
}

export default App;