import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import wave from '../assets/wave.gif';

// the gif section here is hard-coded on purposes instead of being being able to pass a prop through it. The reasoning behind this is because the header will always have the wave.gif :) Please no roast
function Header({ text }) {
    return (
        <div className={css(styles.container)}>
            <img src={wave} alt="Wave GIF" className={css(styles.gif)} />
            <p className={css(styles.text)}>{text}</p>
            <img src={wave} alt="Wave GIF" className={css(styles.gif)} />
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: '55px',
        marginLeft: '20px',
    },
    gif: {
        maxWidth: '100px',
        maxHeight: '100px',
        userSelect: 'none',
    },
});

export default Header;
