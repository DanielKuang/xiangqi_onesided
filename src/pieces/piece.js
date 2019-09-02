export default class Piece {
    constructor(player, imgLink, rank, visibility){
        this.player = player;
        this.style = {backgroundImage: "url('"+imgLink+"')"};
        this.rank = rank;
        this.visibility = visibility;
    }

    isMovePossible(curr_pos, next_pos){
        return ((curr_pos-1 === next_pos) ||
        (curr_pos+1 === next_pos) ||
        (curr_pos+8 === next_pos) ||
        (curr_pos-8 === next_pos) 
        );
    }
}