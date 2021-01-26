import React from 'react'


const Square = (props) => {
    return (
        <button
            className="square"
            style={{ backgroundColor: props.bgColor }}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}
// class Square extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: this.props.value,
//         }
//     }
//     render() {
//         return (
//             <button className="square"
//                 style={{ backgroundColor: this.props.bgColor }}
//                 onClick={() => { this.props.onClick() }}
//             >
//                 {this.props.value}
//             </button>
//         )
//     }
// }

export default Square;