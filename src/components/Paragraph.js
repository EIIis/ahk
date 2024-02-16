import React from 'react';
import Color from '../util/Color';
import { StyleSheet, css } from 'aphrodite';

function Paragraph(props) {
  return (
    <div className={css(styles.mainContainer)}>
      <p
        className={css(styles.subText)}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </div>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 30px',
  },
  subText: {
    fontSize: '30px',
  },
});

export default Paragraph;
