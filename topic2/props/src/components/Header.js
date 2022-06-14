
class Header extends React.Component{

    render(){
        console.log("this",this);

        return(
            <div>
                <ul>
                    {this.props.menuData.map((item,index)=> <li key={`menu-item-${index}`}>{item}</li>)}

                </ul>
            </div> 
        )
    }
}


// burda yazdigimiz key cox vacibdi interviuda soruslur REACT DA KEY NEDI? 
// Dom manupulactionun  UI in silinmesi yenilenmesi ucun lazim olan propsdu