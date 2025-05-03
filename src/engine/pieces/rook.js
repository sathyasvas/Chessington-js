import Player from '../player';
import Piece from './piece';
import Square from '../square';
import King from './king';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let rookMoves= new Array();

        for (let i = 0; i < 8; i++ )
        {
            if(i != location.row)
            {
                if(board.getPiece(Square.at(i, location.col)))
                {
                    if(this.isOpposingPieceValid(Square.at(i, location.col), board))
                    {
                        rookMoves.push(Square.at(i, location.col))
                    }
                    break
                }
                rookMoves.push(Square.at(i, location.col))
            }
        }
        for (let i = 0; i < 8; i++) 
            {
                if(i != location.col) 
                {
                    if(board.getPiece(Square.at(location.row , i)))
                    {
                        if(this.isOpposingPieceValid(Square.at(location.row, i), board))
                            {
                                rookMoves.push(Square.at(location.row , i))
                            }
                        break
                    }
                    rookMoves.push(Square.at(location.row , i))
                }
            }

        return rookMoves
    }

    isOpposingPieceValid(space, board) {
            let opposingPiece = board.getPiece(space)
            if(opposingPiece.player == this.player)
                return false
            else if(opposingPiece instanceof King)
                return false
            else
                return true
        }
}
