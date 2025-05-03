import Player from '../player';
import Square from '../square';
import King from './king';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let pawnAvailableMoves = new Array();

        let nextSpaceWhite    = Square.at(location.row + 1, location.col)
        let next2spacesWhite  = Square.at(location.row + 2, location.col)
        let acrossLeftWhite   = Square.at(location.row + 1, location.col - 1)
        let acrossRightWhite  = Square.at(location.row + 1, location.col + 1)

        let nextSpaceBlack    = Square.at(location.row - 1, location.col)
        let next2spacesBlack  = Square.at(location.row - 2, location.col)
        let acrossLeftBlack   = Square.at(location.row - 1, location.col + 1)
        let acrossRightBlack  = Square.at(location.row - 1, location.col - 1)

        if (this.player === Player.WHITE) {
            if(location.row < 7 && !board.getPiece(nextSpaceWhite)) {
                pawnAvailableMoves.push(nextSpaceWhite)
                if(location.row == 1 && !board.getPiece(next2spacesWhite))  
                    pawnAvailableMoves.push(next2spacesWhite)
                if(board.getPiece(acrossLeftWhite) && this.isOpposingPieceValid(acrossLeftWhite, board, Player.WHITE))
                {
                    pawnAvailableMoves.push(acrossLeftWhite)
                }
                if(board.getPiece(acrossRightWhite) && this.isOpposingPieceValid(acrossRightWhite, board, Player.WHITE))
                {
                    pawnAvailableMoves.push(acrossRightWhite)
                }
            }
        } else {
            if(location.row > 0 && !board.getPiece(nextSpaceBlack)) {
                pawnAvailableMoves.push(nextSpaceBlack)
            if(location.row == 6 && !board.getPiece(next2spacesBlack))
                pawnAvailableMoves.push(next2spacesBlack)
            if(board.getPiece(acrossLeftBlack)  && this.isOpposingPieceValid(acrossLeftBlack, board, Player.BLACK))
                pawnAvailableMoves.push(acrossLeftBlack)
            if(board.getPiece(acrossRightBlack) && this.isOpposingPieceValid(acrossRightBlack, board, Player.BLACK))
                pawnAvailableMoves.push(acrossRightBlack)
        }
        console.log(pawnAvailableMoves);
        }
        return pawnAvailableMoves
    }

    isOpposingPieceValid(spaceAcross, board, player) {
        let opposingPiece = board.getPiece(spaceAcross)
        if(opposingPiece.player == player)
            return false
        else if(opposingPiece instanceof King)
            return false
        else
            return true
    }
}
