import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

const Notification = (props) => {

  let [visibility, setVisibility] = useState(false);
  
  let style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: props.notification.visible
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibility(false);
    }, 2000);
    return () => { setVisibility(true); clearTimeout(timer) };
  }, [props.notification]);

  return (<div id='notification'>{visibility ?
    <div style={style}>
      {props.notification.message}
    </div> : null}</div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const connectedNotification = connect(mapStateToProps, null)(Notification);

export default connectedNotification