// Pieces
class ChessPiece {
    constructor(color, icon, name, position) {
        this.color = color;
        this.icon = icon;
        this.name = name;
        this.position = position;
        this.promoted = false;
;
    }

    isValidSquare(square) {
        const validHorizontal = square.x >= 0 && square.x <= 7;
        const validVertical = square.y >= 0 && square.y <= 7;
        return validHorizontal && validVertical;
    }

    isMoveValid(targetSquare, currentPosition) {
        // Check if target square is valid square
        if (!this.isValidSquare(targetSquare)) {
            return false;
        }

        // Check if any pieces in path
        const deltaX = targetSquare.x - currentPosition.x;
        const deltaY = targetSquare.y - currentPosition.y;

        for (let i = 1; i < Math.max(Math.abs(deltaX), Math.abs(deltaY)); i++) {
            const intermediateSquare = {
                x: currentPosition.x + i * Math.sign(deltaX),
                y: currentPosition.y + i * Math.sign(deltaY)
            };

            if (findPieceAtPosition(intermediateSquare)) {
                return false; // Obstruction in path
            }
        }

        return true;
    }

    highlightLegalMoves() {
        const legalMoves = this.getLegalMoves();
        legalMoves.forEach(move => {
            const squareElement = getSquareElement(move);
            const pieceAtSquare = findPieceAtPosition(move);
    
            // Check if the square is valid and either empty or occupied by an opponent's piece
            if (squareElement && (!pieceAtSquare || pieceAtSquare.color !== this.color)) {
                squareElement.classList.add('highlighted-square');
            }
        });
    }    

    removeHighlights() {
        const legalMoves = this.getLegalMoves();
        legalMoves.forEach(move => {
            const squareElement = getSquareElement(move); 
            if (squareElement) {
                squareElement.classList.remove('highlighted-square');
            }
        });
    }

    isLegalMove(targetSquare, currentPosition = this.position) {
        const legalMoves = this.getLegalMoves(currentPosition);
        return legalMoves.some(move => move.x === targetSquare.x && move.y === targetSquare.y);
    }

    movePieceTo(targetSquare) {
        if (this.isLegalMove(targetSquare)) {
            this.position = targetSquare;
        }
    }
}

// Pawn
class Pawn extends ChessPiece {
    constructor(color, icon, name, position) {
        super(color, icon, name, position);
    }

    getLegalMoves(currentPosition = this.position) {
        const legalMoves = [];
        const direction = this.color === 'white' ? 1 : -1;

        // Forward move
        const forwardMove = { x: currentPosition.x, y: currentPosition.y + direction };
        if (this.isValidSquare(forwardMove) && !findPieceAtPosition(forwardMove)) {
            legalMoves.push(forwardMove);

            // Double move from start
            const doubleMove = { x: currentPosition.x, y: currentPosition.y + 2 * direction };
            if (this.isValidSquare(doubleMove) && currentPosition.y === (this.color === 'white' ? 1 : 6) && !findPieceAtPosition(doubleMove)) {
                legalMoves.push(doubleMove);
            } 
        }

        // Diagonal attacks
        const diagonalAttackLeft = { x: currentPosition.x - 1, y: currentPosition.y + direction };
        const diagonalAttackRight = { x: currentPosition.x + 1, y: currentPosition.y + direction };

        [diagonalAttackLeft, diagonalAttackRight].forEach((diagonalMove) => {
            if (this.isValidSquare(diagonalMove)) {
                const pieceAtDiagonal = findPieceAtPosition(diagonalMove);
                if (pieceAtDiagonal && pieceAtDiagonal.color !== this.color) {
                    legalMoves.push(diagonalMove);
                }
            }
        });
        return legalMoves;
    }
}       

// Rook class
class Rook extends ChessPiece {
    constructor(color, icon, name, position) {
        super(color, icon, name, position);
    }

    getLegalMoves(currentPosition = this.position) {
        const legalMoves = [];
        if (!currentPosition) {
            return legalMoves;
        }

        // Horizontal moves
        for (let i = 0; i <= 7; i++) {
            if (i !== currentPosition.x) {
                const move = { x: i, y: currentPosition.y };
                if (this.isMoveValid(move, currentPosition)) {
                    legalMoves.push(move);
                }
            }
        }

        // Vertical moves
        for (let i = 0; i <= 7; i++) {
            if (i !== currentPosition.y) {
                const move = { x: currentPosition.x, y: i };
                if (this.isMoveValid(move, currentPosition)) {
                    legalMoves.push(move);
                }
            }
        }

        return legalMoves;
    }

    isMoveValid(targetSquare, currentPosition) {
        // Check if target square is valid square
        if (!this.isValidSquare(targetSquare)) {
            return false;
        }

        // Check if move is horizontal/vertical
        if (targetSquare.x !== currentPosition.x && targetSquare.y !== currentPosition.y) {
            return false;
        }

        // Check if there are any pieces in path
        const deltaX = targetSquare.x - currentPosition.x;
        const deltaY = targetSquare.y - currentPosition.y;

        for (let i = 1; i < Math.max(Math.abs(deltaX), Math.abs(deltaY)); i++) {
            const intermediateSquare = {
                x: currentPosition.x + i * Math.sign(deltaX),
                y: currentPosition.y + i * Math.sign(deltaY)
            };

            if (findPieceAtPosition(intermediateSquare)) {
                return false;
            }
        }

        return true;
    }
}

// Knight
class Knight extends ChessPiece {
    constructor(color, icon, name, position) {
        super(color, icon, name, position);
    }

    getLegalMoves(currentPosition = this.position) {
        const legalMoves = [];
        if (!currentPosition) {
            return legalMoves;
        }

        const moves = [
            { x: 2, y: 1 }, { x: 1, y: 2 },
            { x: -2, y: 1 }, { x: -1, y: 2 },
            { x: 2, y: -1 }, { x: 1, y: -2 },
            { x: -2, y: -1 }, { x: -1, y: -2 }
        ];

        for (const move of moves) {
            const newPosition = { x: currentPosition.x + move.x, y: currentPosition.y + move.y };
            if (this.isValidSquare(newPosition)) {
                legalMoves.push(newPosition);
            }
        }

        return legalMoves;
    }

    isMoveValid(targetSquare, currentPosition) {
        if (!this.isValidSquare(targetSquare)) {
            return false;
        }

        // Check if move is an L-shaped jump for knights
        const deltaX = Math.abs(targetSquare.x - currentPosition.x);
        const deltaY = Math.abs(targetSquare.y - currentPosition.y);

        return (deltaX === 1 && deltaY === 2) || (deltaX === 2 && deltaY === 1);
    }
}


// Bishop 
class Bishop extends ChessPiece {
constructor(color, icon, name, position) {
    super(color, icon, name, position);
}

getLegalMoves(currentPosition = this.position) {
    const legalMoves = [];


    // Diagonal moves
    for (let i = 0; i <= 7; i++) {
        const moves = [
            { x: i, y: i },
            { x: i, y: -i },
            { x: -i, y: i },
            { x: -i, y: -i }
        ];

        for (const move of moves) {
            const newSquare = {
                x: currentPosition.x + move.x,
                y: currentPosition.y + move.y
            };

            if (this.isMoveValid(newSquare, currentPosition)) {
                legalMoves.push(newSquare);
            }
        }
    }

    return legalMoves;
}
}

// Queen
class Queen extends ChessPiece {
constructor(color, icon, name, position) {
    super(color, icon, name, position);
}

getLegalMoves(currentPosition = this.position) {
    const legalMoves = [];

    // Horizontal and Vertical moves
    for (let i = 0; i <= 7; i++) {
        if (i !== currentPosition.x) {
            legalMoves.push({ x: i, y: currentPosition.y });
        }

        if (i !== currentPosition.y) {
            legalMoves.push({ x: currentPosition.x, y: i });
        }
    }

    // Diagonal moves
    for (let i = 0; i <= 7; i++) {
        legalMoves.push({ x: currentPosition.x + i, y: currentPosition.y + i });
        legalMoves.push({ x: currentPosition.x + i, y: currentPosition.y - i });
        legalMoves.push({ x: currentPosition.x - i, y: currentPosition.y + i });
        legalMoves.push({ x: currentPosition.x - i, y: currentPosition.y - i });
    }

    return legalMoves.filter(move => this.isMoveValid(move, currentPosition));
}
}

class King extends ChessPiece {
    constructor(color, icon, name, position) {
        super(color, icon, name, position);
    }

    getLegalMoves(currentPosition = this.position) {
        const legalMoves = [];

        const moves = [
            { x: 1, y: 0 }, { x: 1, y: 1 },
            { x: 0, y: 1 }, { x: -1, y: 1 },
            { x: -1, y: 0 }, { x: -1, y: -1 },
            { x: 0, y: -1 }, { x: 1, y: -1 }
        ];

        for (const move of moves) {
            const newPosition = { x: currentPosition.x + move.x, y: currentPosition.y + move.y };
            if (this.isMoveValid(newPosition, currentPosition)) {
                legalMoves.push(newPosition);
            }
        }

        return legalMoves;
    }
}


// gameplay

const chessBoardElement = document.getElementById('chessBoard');
const boardSize = 320;

chessBoardElement.style.width = boardSize + 'px';
chessBoardElement.style.height = boardSize + 'px';

const whitePieces = [
new Rook('white', '♖', 'Rook', { x: 0, y: 0 }),
new Knight('white', '♘', 'Knight', { x: 1, y: 0 }),
new Bishop('white', '♗', 'Bishop', { x: 2, y: 0 }),
new Queen('white', '♕', 'Queen', { x: 3, y: 0 }),
new King('white', '♔', 'King', { x: 4, y: 0 }),
new Bishop('white', '♗', 'Bishop', { x: 5, y: 0 }),
new Knight('white', '♘', 'Knight', { x: 6, y: 0 }),
new Rook('white', '♖', 'Rook', { x: 7, y: 0 }),

new Pawn('white', '♙', 'Pawn', { x: 0, y: 1 }),
new Pawn('white', '♙', 'Pawn', { x: 1, y: 1 }),
new Pawn('white', '♙', 'Pawn', { x: 2, y: 1 }),
new Pawn('white', '♙', 'Pawn', { x: 3, y: 1 }),
new Pawn('white', '♙', 'Pawn', { x: 4, y: 1 }),
new Pawn('white', '♙', 'Pawn', { x: 5, y: 1 }),
new Pawn('white', '♙', 'Pawn', { x: 6, y: 1 }),
new Pawn('white', '♙', 'Pawn', { x: 7, y: 1 }),
];

const blackPieces = [
new Rook('black', '♜', 'Rook', { x: 0, y: 7 }),
new Knight('black', '♞', 'Knight', { x: 1, y: 7 }),
new Bishop('black', '♝', 'Bishop', { x: 2, y: 7 }),
new Queen('black', '♛', 'Queen', { x: 3, y: 7 }),
new King('black', '♚', 'King', { x: 4, y: 7 }),
new Bishop('black', '♝', 'Bishop', { x: 5, y: 7 }),
new Knight('black', '♞', 'Knight', { x: 6, y: 7 }),
new Rook('black', '♜', 'Rook', { x: 7, y: 7 }),

new Pawn('black', '♟', 'Pawn', { x: 0, y: 6 }),
new Pawn('black', '♟', 'Pawn', { x: 1, y: 6 }),
new Pawn('black', '♟', 'Pawn', { x: 2, y: 6 }),
new Pawn('black', '♟', 'Pawn', { x: 3, y: 6 }),
new Pawn('black', '♟', 'Pawn', { x: 4, y: 6 }),
new Pawn('black', '♟', 'Pawn', { x: 5, y: 6 }),
new Pawn('black', '♟', 'Pawn', { x: 6, y: 6 }),
new Pawn('black', '♟', 'Pawn', { x: 7, y: 6 }),
];
    
function createChessboard() {
        chessBoardElement.innerHTML = '';
    
        for (let row = 0; row < 8; row++) {
            const rowElement = document.createElement('div');
            rowElement.className = 'chess-row';
            rowElement.setAttribute('data-row', row);
    
            for (let col = 0; col < 8; col++) {
                const squareElement = document.createElement('div');
                squareElement.className = 'chess-square';
                squareElement.setAttribute('data-col', col);
                squareElement.setAttribute('id', `square-${col}-${row}`); 
    
                squareElement.removeEventListener('click', handleSquareClick);
    
                squareElement.addEventListener('click', handleSquareClick);
    
                if ((row + col) % 2 === 0) {
                    squareElement.classList.add('light-square');
                } else {
                    squareElement.classList.add('dark-square');
                }
    
                const piece = findPieceAtPosition({ x: col, y: row });
                if (piece) {
                    squareElement.textContent = piece.icon;
                }
                rowElement.appendChild(squareElement);
            }
            chessBoardElement.appendChild(rowElement);
        }
    }        

function updateChessboard() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const squareElement = document.querySelector(`.chess-row:nth-child(${row + 1}) .chess-square:nth-child(${col + 1})`);
                squareElement.innerHTML = '';

                const piece = findPieceAtPosition({ x: col, y: row });
                if (piece) {
                    squareElement.textContent = piece.icon;
                }
            }
        }
    }  
    
    let selectedPiece = null; 

function handleSquareClick(event) {
const squareElement = event.target;
const col = parseInt(squareElement.getAttribute('data-col'));
const row = parseInt(squareElement.parentElement.getAttribute('data-row'));

const piece = findPieceAtPosition({ x: col, y: row });

if (selectedPiece) {
    // If a piece is already selected

    if (piece && piece.color === selectedPiece.color) {
        // Clicked on another piece of the same color
        selectedPiece.removeHighlights();
        selectedPiece = piece;
        selectedPiece.highlightLegalMoves();
    } else if (selectedPiece.isLegalMove({ x: col, y: row }, selectedPiece.position)) {
        // Clicked on a legal move
        
        if (!isMoveAllowed(selectedPiece, { x: col, y: row })) {
            // Check if the move is allowed based on check condition
            selectedPiece.removeHighlights();
            selectedPiece = null;
            return;
        }
        
        movePiece(selectedPiece, { x: col, y: row }); // Pass the targetSquare
        selectedPiece = null;

        // After move is made
    if (isKingInCheck(getCurrentPlayerKing(), opponent === 'white' ? whitePieces : blackPieces)) {
        alert('Check!'); // Alert if the current player's king is in check

        // Check for Checkmate
        if (isCheckmate(currentPlayer === 'white' ? whitePieces : blackPieces, opponent === 'white' ? whitePieces : blackPieces)) {
            alert('Checkmate! Game Over.');

            // Reset page after the alert is dismissed
            window.location.reload();
        }
    }
    } else {
        // Clicked on an invalid square
        selectedPiece.removeHighlights();
        selectedPiece = null;
    }
} else {
    // If no piece is selected
    if (piece && piece.color === currentPlayer) {
        // Clicked on a piece of the current player's color
        selectedPiece = piece;
        selectedPiece.highlightLegalMoves();
    } else {
        // Clicked on an empty or opponent's square
        selectedPiece = null;
    }
}

// Log statements to check highlighted squares
const highlightedSquares = document.querySelectorAll('.highlighted-square');
}
 
// Move piece 
function movePiece(piece, targetSquare) {
        // Check move is valid
        if (piece && piece.isLegalMove(targetSquare, piece.position) && piece.color === currentPlayer) {
            // Remove highlights from current piece
            piece.removeHighlights();
    
           // Check for pawn promotion
            if (piece instanceof Pawn && (targetSquare.y === 0 || targetSquare.y === 7)) {
                // Pawn at opposite end of board, prompt for promotion
                const promotionPiece = prompt("Pawn promotion! Choose a piece to promote to: Queen, Rook, Bishop, Knight");

                //Regex to allow upper/lower case spellings
                const queenRegex = /^(queen|q)$/i;
                const rookRegex = /^(rook|r)$/i;
                const bishopRegex = /^(bishop|b)$/i;
                const knightRegex = /^(knight|k)$/i;

                let newPiece;

                if (queenRegex.test(promotionPiece)) {
                    newPiece = new Queen(piece.color, piece.color === 'white' ? '♕' : '♛', 'Queen', targetSquare);
                } else if (rookRegex.test(promotionPiece)) {
                    newPiece = new Rook(piece.color, piece.color === 'white' ? '♖' : '♜', 'Rook', targetSquare);
                } else if (bishopRegex.test(promotionPiece)) {
                    newPiece = new Bishop(piece.color, piece.color === 'white' ? '♗' : '♝', 'Bishop', targetSquare);
                } else if (knightRegex.test(promotionPiece)) {
                    newPiece = new Knight(piece.color, piece.color === 'white' ? '♘' : '♞', 'Knight', targetSquare);
                } else {
                    // Default Queen
                    newPiece = new Queen(piece.color, piece.color === 'white' ? '♕' : '♛', 'Queen', targetSquare);
                }

                // Replace promoted pawn with chosen piece
                const index = piece.color === 'white' ? whitePieces.indexOf(piece) : blackPieces.indexOf(piece);
                if (index !== -1) {
                    if (piece.color === 'white') {
                        whitePieces.splice(index, 1, newPiece);
                    } else {
                        blackPieces.splice(index, 1, newPiece);
                    }
                    piece = newPiece;
                }
                piece.removeHighlights();
            } else {
                // Update piece's position
                piece.position = targetSquare;
            }
                    
            // Capture opponent's piece
            const opponentPieces = currentPlayer === 'white' ? blackPieces : whitePieces;
            const capturedPieceIndex = opponentPieces.findIndex(opponentPiece =>
                opponentPiece.position && opponentPiece.position.x === targetSquare.x && opponentPiece.position.y === targetSquare.y
            );
    
            if (capturedPieceIndex !== -1) {
                opponentPieces.splice(capturedPieceIndex, 1);
            
            }

            updateChessboard();
            switchPlayer();
        }
        
    }                
    
// Get piece        
function findPieceAtPosition(position, pieces) {
        const allPieces = pieces ? pieces : whitePieces.concat(blackPieces);
        return allPieces.find(piece => piece.position.x === position.x && piece.position.y === position.y);
    } 
    
// Get Square       
function getSquareElement(coordinates) {
        return document.getElementById(`square-${coordinates.x}-${coordinates.y}`);
    }
    
// Set starting player
let currentPlayer = 'white'; 
let opponent = 'black';


// Switch player
function switchPlayer() {
currentPlayer = currentPlayer === 'white' ? 'black' : 'white';
opponent = opponent === 'white' ? 'black' : 'white'; 

}

// Play button click
    
document.getElementById('playButton').addEventListener('click', function () {
const playButton = document.getElementById('playButton');
playButton.style.display = 'none';

createChessboard();
});

// Check and checkmate functions 

// Function to check if king in check
function isKingInCheck(king, opponentPieces) {
const kingPosition = king.position;

// Check each opponent piece's legal moves
for (const piece of opponentPieces) {
    const legalMoves = piece.getLegalMoves();
    if (legalMoves.some(move => move.x === kingPosition.x && move.y === kingPosition.y)) {
        return true; // King is in check
    }
}

return false; // King is not in check
}

function isMovePuttingKingInCheck(piece, targetSquare, opponentPieces) {
const originalPosition = piece.position;

// Temporarily move the piece to the target square
piece.movePieceTo(targetSquare);

// Check if the king is in check after the move
const isCheck = isKingInCheck(getCurrentPlayerKing(), opponentPieces);

// Move the piece back to its original position
piece.movePieceTo(originalPosition);

return !isCheck; // If the move puts the king out of check, it's a valid move
}


// Function to get the current player's king
function getCurrentPlayerKing() {
const currentPlayerPieces = currentPlayer === 'white' ? whitePieces : blackPieces;
return currentPlayerPieces.find(piece => piece instanceof King);
};

function isMoveAllowed(piece, targetSquare) {
const currentPlayerKing = getCurrentPlayerKing();
const opponentPieces = opponent === 'white' ? whitePieces : blackPieces;

// Check if the move is allowed based on check condition
if (isKingInCheck(currentPlayerKing, opponentPieces)) {
    if (piece === currentPlayerKing) {
        // Allow the king to move only if the move puts it out of check
        if (!isMovePuttingKingInCheck(piece, targetSquare, opponentPieces)) {
            // Check if the move exposes the king to check from another piece
            const isExposedToCheck = opponentPieces.some(opponentPiece => {
                const legalMoves = opponentPiece.getLegalMoves();
                return legalMoves.some(move => move.x === targetSquare.x && move.y === targetSquare.y);
            });

            return !isExposedToCheck;
        }
    } else {
        // Allow other pieces only if they are defending the king
        return isDefendingPiece(piece, targetSquare);
    }
}

return true;
}

// Function to check if a piece is defending the king
function isDefendingPiece(piece, targetSquare) {
    const currentPlayerKing = getCurrentPlayerKing();
    const opponentPieces = opponent === 'white' ? whitePieces : blackPieces;

    // Get position of the current player's king
    const kingPosition = currentPlayerKing.position;

    // Check if the piece can block or capture attacking piece
    for (const opponentPiece of opponentPieces) {
        const legalMoves = opponentPiece.getLegalMoves();

        // Check if the opponent's piece can attack the king
        if (legalMoves.some(move => move.x === kingPosition.x && move.y === kingPosition.y)) {
            // Check if the current piece can block attack or capture attacker
            const pieceMoves = piece.getLegalMoves();
            if (pieceMoves.some(move => move.x === targetSquare.x && move.y === targetSquare.y)) {
                return true; // Piece can defend the king
            }
        }
    }

    return false; // The piece cannot defend the king
}

function isCheckmate(playerPieces, opponentPieces) {
    const currentPlayerKing = playerPieces.find(piece => piece instanceof King);
    const kingPosition = currentPlayerKing.position;

    // Check if the king in check
    const isKingInCheck = opponentPieces.some(opponentPiece => {
        const legalMoves = opponentPiece.getLegalMoves();
        return legalMoves.some(move => move.x === kingPosition.x && move.y === kingPosition.y);
    });

    // If king is not in check
    if (!isKingInCheck) {
        return false;
    }

    // Check if the king can move to any square to get out of check
    for (let x = kingPosition.x - 1; x <= kingPosition.x + 1; x++) {
        for (let y = kingPosition.y - 1; y <= kingPosition.y + 1; y++) {
            const potentialMove = { x, y };

            // Ensure the potential move is within board bounds and not occupied by own piece
            if (currentPlayerKing.isValidSquare(potentialMove) && 
                !playerPieces.some(piece => piece.position.x === potentialMove.x && piece.position.y === potentialMove.y)) {

                // Check if making this move takes king out of check
                const isKingSafeAfterMove = !opponentPieces.some(opponentPiece => {
                    const legalMoves = opponentPiece.getLegalMoves();
                    return legalMoves.some(move => move.x === potentialMove.x && move.y === potentialMove.y);
                });

                if (isKingSafeAfterMove) {
                    return false; // King can escape check, so no checkmate
                }
            }
        }
    }

    // If no valid moves can get the king out of check, it's checkmate
    return true;
}
