import Piece from '../pieces/piece.js';

export default function initBoard(){
    const board = Array(32).fill(null);
    const all_pieces = Array(32).fill(null);
    let kings = 2; queens = 4; horses = 4; cannons = 4; pawns = 10; rooks = 4; elephants = 4;
    // large->small: king, queen, elephant, rook, horse, cannon, pawn 
    for (indx=0; indx < all_pieces.length; indx++){
        if (kings){
            if (kings <= 1){
                all_pieces[indx].push(Piece(2, "../public/xiangqi_pieces/black_kg.png", 7));
            }
            else {
                all_pieces[indx].push(Piece(1, "../public/xiangqi_pieces/red_kg.png", 7));
            };
            kings -= 1;
        }
        else if (queens){
            if (queens <= 2){
                all_pieces[indx].push(Piece(2, "../public/xiangqi_pieces/black_qn.png", 6));
            }
            else {
                all_pieces[indx].push(Piece(1, "../public/xiangqi_pieces/red_qn.png", 6));
            };
            queens -= 1;
        }
        else if (horses){
            if (horses <= 2){
                all_pieces[indx].push(Piece(2, "../public/xiangqi_pieces/black_he.png", 3));
            }
            else {
                all_pieces[indx].push(Piece(1, "../public/xiangqi_pieces/red_he.png", 3));
            };
            horses -= 1;
        }
        else if (cannons){
            if (cannons <= 2){
                all_pieces[indx].push(Piece(2, "../public/xiangqi_pieces/black_cn.png", 2));
            }
            else {
                all_pieces[indx].push(Piece(1, "../public/xiangqi_pieces/red_cn.png", 2));
            };
            cannons -= 1;

        }
        else if (pawns){
            if (pawns <= 5){
                all_pieces[indx].push(Piece(2, "../public/xiangqi_pieces/black_pn.png", 1));
            }
            else {
                all_pieces[indx].push(Piece(1, "../public/xiangqi_pieces/red_pn.png", 1));
            };
            pawns -= 1;
        }
        else if (rooks){
            if (rooks <= 2){
                all_pieces[indx].push(Piece(2, "../public/xiangqi_pieces/black_rk.png", 4));
            }
            else {
                all_pieces[indx].push(Piece(1, "../public/xiangqi_pieces/red_rk.png", 4));
            };
            rooks -= 1;
        }
        else {
            if (elephants <= 1){
                all_pieces[indx].push(Piece(2, "../public/xiangqi_pieces/black_et.png", 5));
            }
            else {
                all_pieces[indx].push(Piece(1, "../public/xiangqi_pieces/red_et.png", 5));
            };
            elephants -= 1;
        };
        
    }

    for (indx = 0; indx < board.length ; indx++){
        let randPieceIndx = null;
        while (randPieceIndx === null){
            randPieceIndx = Math.floor(Math.random()*all_pieces.length);
        };
        board.push(all_pieces[randPieceIndx]);
        all_pieces[randPieceIndx] = null;
    }

    return board;

}
