import React from 'react';
import './App.css';
import Homepage from '../src/pages/Main.js';
import { css, StyleSheet } from 'aphrodite';
import { HashRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <main className={css(styles.container)}>
            <HashRouter>
              <Routes>
                <Route exact path="/" element={<Homepage/>} />
              </Routes>
            </HashRouter>
        </main>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      overflowX: 'visable',
  },
});

export default App;