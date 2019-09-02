import Piece from '../pieces/piece.js';

export default function initBoard() {
    const board = Array(32).fill(null);
    const all_pieces = Array(32).fill(null);
    let kings = 2; let queens = 4; let horses = 4; let cannons = 4; let pawns = 10; let rooks = 4; let elephants = 4;
    // large->small: king, queen, elephant, horse, rook, cannon, pawn 
    for (let indx = 0; indx < all_pieces.length; indx++) {
        if (kings) {
            if (kings <= 1) {
                all_pieces[indx] = new Piece(2, "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg", 7);
            }
            else {
                all_pieces[indx] = new Piece(1, "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg", 7);
            };
            kings -= 1;
        }
        else if (queens) {
            if (queens <= 2) {
                all_pieces[indx] = new Piece(2, "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg", 6);
            }
            else {
                all_pieces[indx] = new Piece(1, "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg", 6);
            };
            queens -= 1;
        }
        else if (horses) {
            if (horses <= 2) {
                all_pieces[indx] = new Piece(2, "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg", 4);
            }
            else {
                all_pieces[indx] = new Piece(1, "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg", 4);
            };
            horses -= 1;
        }
        else if (cannons) {
            if (cannons <= 2) {
                all_pieces[indx] = new Piece(2, "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg", 2);
            }
            else {
                all_pieces[indx] = new Piece(1, "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg", 2);
            };
            cannons -= 1;

        }
        else if (pawns) {
            if (pawns <= 5) {
                all_pieces[indx] = new Piece(2, "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg", 1);
            }
            else {
                all_pieces[indx] = new Piece(1, "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg", 1);
            };
            pawns -= 1;
        }
        else if (rooks) {
            if (rooks <= 2) {
                all_pieces[indx] = new Piece(2, "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg", 3);
            }
            else {
                all_pieces[indx] = new Piece(1, "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg", 3);
            };
            rooks -= 1;
        }
        else {
            if (elephants <= 2) {
                all_pieces[indx] = new Piece(2, "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg", 5);
            }
            else {
                all_pieces[indx] = new Piece(1, "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg", 5);
            };
            elephants -= 1;
        };

    }
    
    for (let indx = 0; indx < board.length; indx++) {
        let randPieceIndx = null;
        while (randPieceIndx === null) {
            randPieceIndx = Math.floor(Math.random() * all_pieces.length);
            if (all_pieces[randPieceIndx] === null){
                randPieceIndx = null;
            }
        };
        board[indx] = all_pieces[randPieceIndx];
        all_pieces[randPieceIndx] = null;
    }
    return board;

}
