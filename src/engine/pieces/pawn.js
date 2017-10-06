import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let pawnAvailableMoves = new Array();
        if (this.player === Player.WHITE) {
            if(board.getPiece(Square.at(location.row + 1, location.col)) == undefined) {
                console.log("Inside GET White");
                pawnAvailableMoves.push(Square.at(location.row + 1, location.col))
                if(location.row == 1 && (board.getPiece(Square.at(location.row + 2, location.col)) == undefined))  
                    pawnAvailableMoves.push(Square.at(location.row + 2, location.col))
            }
        } else {
            if(board.getPiece(Square.at(location.row - 1, location.col)) == undefined) {
                console.log("Inside GET Black");
                pawnAvailableMoves.push(Square.at(location.row - 1, location.col))
            if(location.row == 6 && (board.getPiece(Square.at(location.row - 2, location.col)) == undefined)) {
                console.log("Inside Black 2 spaces");
                pawnAvailableMoves.push(Square.at(location.row - 2, location.col))
            }
        }
        console.log(pawnAvailableMoves);
        }
        return pawnAvailableMoves
    }
}
