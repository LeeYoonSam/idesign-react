import React from 'react';

const noPageStyle = {
    NoPage: {
        fontSize: 20,
        marginTop: 100,
        color: 'red'
    }
}

const NotExist = (props) => {
    return (
        <div style={noPageStyle.NoPage}>페이지가 존재하지 않습니다.</div>
    );
}

export default NotExist;