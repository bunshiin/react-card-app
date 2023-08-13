import React from 'react'

const Course = ({ title, desc, image }) => {

  return (

    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="ekip" />
        </figure>
      </div>
      <div className="card-content">

        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
        
        <div className="content">
          {desc}
        </div>
      </div>
    </div>
    /*{ <div className='course'>
      <div className='course-wrapper'>

        <img src={image} alt="" />
        <div>{title}</div>
        <div>{desc}</div>


      </div>
    </div> }*/
  )
}

export default Course