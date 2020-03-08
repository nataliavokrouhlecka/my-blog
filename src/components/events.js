import React from 'react';
import { Timeline } from 'antd';
import './events.css'

class Events extends React.Component {

  render() {
    return (
      <div id="events" className="events">
        <h3 className="events-header">I enjoy organising events and enabling people to come together, learn and grow. It always helps me to learn something new myself. I co-led all of the events listed below.</h3>
        <Timeline mode="alternate" className="events-timeline">
          <Timeline.Item color="#FFF8D1">Reactive Conf, Code Retreat workshop 1-Nov-2019</Timeline.Item>
          <Timeline.Item color="#FFF8D1">Open meetup at MSD, Hacktoberfest workshop 23-Oct-2019</Timeline.Item>
          <Timeline.Item color="#FFF8D1">Open meetup at MSD, Code Retreat workshop 11-Jun-2019</Timeline.Item>
          <Timeline.Item color="#FFF8D1">Dev Fest, Code Retreat workshop 2-Nov-2018</Timeline.Item>
        </Timeline>
      </div>
    );
  }
}

export default Events;