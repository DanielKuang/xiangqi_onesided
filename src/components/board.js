import 'React';
import '../../public/css/index.css'
import Square from './square.js';

export default class Board extends React.Component {
    renderSquare(indx){
        return (<Square piece={this.props.squares[indx]} onClick = {() => this.props.onClick(indx)}/>);
    }

    render(){
        const board = [];
        for (rowIndx=0; rowIndx<9; rowIndx++){
            const row = [];
            for (colIndx=0; colIndx<5; colIndx++){
                row.push(this.renderSquare(rowIndx*9+colIndx));
            }
            board.push(<div>{row}</div>)
        }
        return <div>{board}</div>
    }
}