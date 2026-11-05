const storyNodes = {
    start: {
        text: "You take the blue pill, the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill, you stay in Wonderland, and I show you how deep the rabbit hole goes.",
        choices: [
            { text: "Choose the red pill", nextNode: 'nested' },
            { text: "Choose the blue pill", nextNode: 'boundary' }
        ]
    }, 
    boundary: {
        text: "This is your last chance. After this, there is no turning back. You take the blue pill – the story ends, you wake up in your bed and believe whatever you want to believe.",
        choices: [
            { text: "Stay in the Matrix", nextNode: 'start' }
        ]
    },
    nested: {
        text: "I'm trying to free your mind, Neo. But I can only show you the door. You're the one that has to walk through it.",
        choices: [
            { text: "Return to the real world", nextNode: 'start' }
        ]
    }
};

function showNode(nodeKey) {
    const node = storyNodes[nodeKey];
    if (!node) {
        console.error("Node not found: " + nodeKey);
        return;
    }

    document.getElementById('text-display').innerText = node.text;

    const buttonMatrix = document.getElementById('button-matrix');
    buttonMatrix.innerHTML = '';

    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-btn';
        button.innerText = choice.text;
        button.onclick = () => showNode(choice.nextNode);
        buttonMatrix.appendChild(button);
    });
}

window.onload = () => {
    showNode('start');
};
