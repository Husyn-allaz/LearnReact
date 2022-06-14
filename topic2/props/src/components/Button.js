
class Button extends React.Component{

    // staticle ona gore verdiyki eyer bizde olcu verilmese avtomatik ozu versin
    static defaultProps = {
        width:100,
        height:70,
    }

    handleColor() {
        switch (this.props.color) {
            case "red":
                return"bg-danger";
                case "yellow":
                    return"bg-warning";
                    case "blue":
                return"bg-primary";
        
            default:
                return "";
        }
    }

    render() {

        console.log("this Button", this);

        let inlineStyle = {
            width: this.props.width,
            height: this.props.height,
            padding: this.props.p,
            margin: this.props.m,
        };

        return(
            <button
            style={inlineStyle}
             className={`${this.handleColor()} ${this.props.radius}`}>
                {this.props.children}</button>
        )
    };
}