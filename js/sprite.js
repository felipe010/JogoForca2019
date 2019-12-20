function createSprite(selector) {
    
    let el = selector;

    let frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    let current = 0;
    let last = frames.length -1;

    el.classList.add(frames[current])
    
    function moveFrame(from, to) {
        /*from -> a partir de
            to -> para */
        el.classList.remove(from);
        el.classList.add(to);
    }

    function nextFrame() {
        moveFrame(frames[current], frames[++current]);
    }
    
    return {
        nextFrame: nextFrame
    }
}