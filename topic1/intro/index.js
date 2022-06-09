
// komponentın icinde komponent yaradiriq boxu asagida cagirdiq

class Box extends React.Component{

    render(){
        let a=10
        return(
            <div>
                <h1>Box- {a}</h1>
            </div>
        )
    }
}






// Biz burda h1 yerine divde yaza bileriy span da 2cideki kimi

// ReactDOM.render(<h1>Huseyn React</h1>, document.getElementById('root'))
// ------------------------------------------------------------------------
// ReactDOM.render(<div>
//     <h1>Huseyn React</h1>
//     <span>Test</span>
// </div>, document.getElementById('root'))

// ---------------------------------------------------------------------------------
// burada app komponenti miras gotursun react komponentinin xususiyetlerini
class App extends React.Component{
    say=5
    car= "car2"
    
    // constructor(){
    //     super()
    // }

    handTime(){
        return 105
    }

    // burda eyer renderin icinde yazilibsa this yazmaga ehtiyac yoxdu
    render(){
        let count=15
        let imageTag = <img width="400" src="https://albayrac.com/wp-content/uploads/2020/06/2021-BMW-M5-3-2.jpg"/>

        return(
            <div>
                <Box/>
              <h1>Huseyn React {this.say}</h1>
              <h2>Huseyn Allazov {count}</h2>
              <span>Test</span>
              <h3>{this.handTime()}</h3>
              {/* {imageTag} */}

              <img width="400" src={this.car === "car2" ? "https://img.gta5-mods.com/q75/images/bmw-m8-f92-akrapovic-sound/d64902-BMW-M8-Competition-Z-Performance-Wheels-7.jpg" :"https://albayrac.com/wp-content/uploads/2020/06/2021-BMW-M5-3-2.jpg"}/>

            </div>
        )
    }
}

// biz burda classi oturende tag kimi vermeliyiy
ReactDOM.render(<App/>, document.getElementById('root'))


