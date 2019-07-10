export default class Piece {
    constructor(player, imgLink, rank){
        this.player = player;
        this.style = {backgroundImage: "url('"+imgLink+"')"};
        this.rank = rank;
    }

    isMovePossible(curr_pos, next_pos){
        return ((curr_pos-1 === next_pos) ||
        (curr_pos+1 === next_pos) ||
        (curr_pos+9 === next_pos) ||
        (curr_pos-9 === next_pos) 
        );
    }
}