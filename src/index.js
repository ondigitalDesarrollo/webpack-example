import greetings from './robot.js';
import styles from './app.css';
document.write(greetings('Affirmative','Dave'));

function Component() {
    var element = document.createElement('div');
    element.innerHTML = 'Hello';
    return element;
}

document.body.appendChild(Component());

let element = `
    <div class="element">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>
    </div>
`;

document.write(element);