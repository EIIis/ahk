import React from 'react';
import './App.css';
import Homepage from '../src/pages/Main.js';
import { css, StyleSheet } from 'aphrodite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <main className={css(styles.container)}>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Homepage/>} />
              </Routes>
            </BrowserRouter>
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