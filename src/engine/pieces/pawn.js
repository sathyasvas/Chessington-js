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
            if(location.row < 7 && board.getPiece(Square.at(location.row + 1, location.col)) == undefined) {
                pawnAvailableMoves.push(Square.at(location.row + 1, location.col))
                if(location.row == 1 && (board.getPiece(Square.at(location.row + 2, location.col)) == undefined))  
                    pawnAvailableMoves.push(Square.at(location.row + 2, location.col))
                if(board.getPiece(Square.at(location.row + 1, location.col - 1)) != undefined)
                    pawnAvailableMoves.push(Square.at(location.row + 1, location.col - 1))
                if(board.getPiece(Square.at(location.row + 1, location.col + 1)) != undefined)
                    pawnAvailableMoves.push(Square.at(location.row + 1, location.col + 1))
            }
        } else {
            if(location.row > 0 && board.getPiece(Square.at(location.row - 1, location.col)) == undefined) {
                pawnAvailableMoves.push(Square.at(location.row - 1, location.col))
            if(location.row == 6 && (board.getPiece(Square.at(location.row - 2, location.col)) == undefined))
                pawnAvailableMoves.push(Square.at(location.row - 2, location.col))
            if(board.getPiece(Square.at(location.row + 1, location.col - 1)) != undefined)
                pawnAvailableMoves.push(Square.at(location.row - 1, location.col + 1))
            if(board.getPiece(Square.at(location.row - 1, location.col - 1)) != undefined)
                pawnAvailableMoves.push(Square.at(location.row - 1, location.col - 1))
        }
        console.log(pawnAvailableMoves);
        }
        return pawnAvailableMoves
    }
}
