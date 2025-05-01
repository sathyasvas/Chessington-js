import Player from '../player';
import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let rookMoves= new Array();
        for (let i = 0; i < 8; i++ ){
            if(i != location.row)
                rookMoves.push(Square.at(i, location.col))
        }
        for (let i = 0; i < 8; i++) {
            if(i != location.col)
                rookMoves.push(Square.at(location.row , i))
            }
    return rookMoves;
    }
}
