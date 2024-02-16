import React from 'react'
import data from '../Helpers/Data'
import styles from './Studies.module.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Book} from 'lucide-react'

function Studies() {
const studies = data[0].estudios;

  return (
    <div className={styles.container}>
      <h1>Estudios</h1>
    <div className={styles.cards}>
      <VerticalTimeline
        lineColor="#D03A3D"
        layout='1-column-right'
      >
        {
          studies 
          ? studies.map((study,index)=>{
            return(
              <VerticalTimelineElement
                key={index}
                date={study.Duracion}
                icon={<Book/>}
                iconStyle={{background:'#D03A3D'}}
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#D03A3D'}}
              >
                <h3 className="vertical-timeline-element-title">{study.nombreInstitucion}</h3>
                <h4 className="vertical-timeline-element-subtitle">{study.Titulo}</h4>
                <p>{study.Descripcion}</p>
              </VerticalTimelineElement>
            )
          })
          : <p>Nada</p>
        }
      </VerticalTimeline>
    </div>
    
    </div>
  )
}

export default Studies