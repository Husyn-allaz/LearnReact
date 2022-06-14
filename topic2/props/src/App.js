


class App extends React.Component{

    render(){


        let menuArr = ["Home","About","Contact","Blog"]

        let resultData = [
            { name:"John", age:23 },
            { name:"Brayn", age:43 },
        ];

        return(
            /* biz burda boxun yanina elave etdiklerimiz PROPSdur */
            
            <>
            <Header menuData={menuArr}/>
            <Box 
            className="bg-warning" 
            Huseyn="salam" 
            data={resultData}
            yas={22} 
            tagi={<p>Lorem</p>} 
            isMaried={false} 
            // handleJob={() => {
            //     alert("salam");
            // }}
            />
            <Button 
            width={250} height={100} 
            p={20} m={20}color="yellow" radius="rounded">Gonder</Button>

            <Button 
            // width={250} height={100} 
            p={5} m={10}color="red">Resend</Button>
            <h1>Test React</h1>
            </>
        )
    }
}