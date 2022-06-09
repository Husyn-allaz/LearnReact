

class App extends React.Component{

    render(){
        // let isYellow = false
        return(
            // <h1 className={isYellow ? "yellow" : "red"}>Test</h1>
            
            // burda <> bu isareni yazmasaq error verir veya <React.Fragment></React.Fragment> yazabilerdiy eyni isi gorur
            <>        
            <Header />
            <Carousel />
            <Footer />
            </>
        )
    }
}