import "bulma/css/bulma.css"
import Course from "./Course"
import "./App.css"
import guitar1 from "./assets/guitar1.jpg"
import guitar2 from "./assets/guitar2.jpg"
import guitar3 from "./assets/guitar3.jpg"
import guitar4 from "./assets/guitar4.jpg"

const App = () => {
  return (
    <div className="App">
      <section className="hero  is-link">
        <div className="hero-body">
          <p className="title has-text-centered">
            Gitar Ekibimiz
          </p>
        </div>
      </section>
      <div className="container">

        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={guitar1}
                title="Muhammet" desc="vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum" />
            </div>
            <div className="column">


              <Course
                image={guitar2}
                title="Ömer" desc="vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum" />
            </div >
            <div className="column">


              <Course
                image={guitar3}
                title="Alperen" desc="vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum" />
            </div>
            <div className="column">
              <Course
                image={guitar4}
                title="Çınar" desc="vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum" />
            </div>




          </div>
        </section>
      </div>
    </div>
  )
}


export default App