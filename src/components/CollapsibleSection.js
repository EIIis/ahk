import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CollapsibleSection({ title, children }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={css(styles.container)}>
            <div className={css(styles.header)} onClick={toggleCollapse}>
                <span className={css(styles.title)}>{title}</span>
                <span className={css(styles.icon)}>{isCollapsed ? '▶' : '▼'}</span>
            </div>
            {!isCollapsed && <div className={css(styles.content)}>{children}</div>}
        </div>
    );
}

CollapsibleSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
    container: {
        border: '1px solid #ddd',
        borderRadius: '5px',
        marginBottom: '10px',
    },
    header: {
        padding: '10px',
        backgroundColor: '#f1f1f1',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',  // Center the title
        flex: '1',            // Allow title to take available space
    },
    icon: {
        fontSize: '18px',
    },
    content: {
        padding: '10px',
    },
});

export default CollapsibleSection;
