import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementsByTagName('body')[0];
    const container = document.getElementById('container');
    const dummyDraggable = document.getElementById('dummy-draggable');

    const fruits = [
        'Авокадо',
        'Апельсин',
        'Арбуз',
        'Банан',
        'Виноград',
        'Грейпфрут',
    ];

    const draggables = createItems();
    let startPosOffsetX = 0;
    let startPosOffsetY = 0;
    let dragging = null;
    dragSubscribe(draggables);

    function createItems() {
        const result = [];
        [...fruits].forEach((fruit, index) => {
            const item = document.createElement('div');
            item.classList.add('draggable');

            item.innerHTML = `
                <span class="number">${index + 1}</span>
                <span class="fruit-name">${fruit}</span>
            `;

            result.push(item);

            container.appendChild(item);
        });

        return result;
    };

    function dragSubscribe(draggables) {
        draggables.forEach(draggable => {
            draggable.addEventListener('mousedown', (e) => {
                dragging = draggable;
                setDummyDraggable(draggable, e);
                draggable.classList.add('dragging');
                body.addEventListener('mousemove', handleDrag);
            });
        });
        body.addEventListener('mouseup', () => {
            dragging.classList.remove('dragging');
            dragging = null;
            body.removeEventListener('mousemove', handleDrag);
            dummyDraggable.style.display = 'none';
            dummyDraggable.innerHTML = '';
            reIndexItems();
        });
    };

    function setDummyDraggable(draggable, e) {
        const draggableClone = draggable.cloneNode(true);
        const dragginBox = draggable.getBoundingClientRect();
        startPosOffsetX = e.clientX - dragginBox.left;
        startPosOffsetY = e.clientY - dragginBox.top;
        dummyDraggable.appendChild(draggableClone);
        Object.assign(dummyDraggable.style, {
            display: 'block',
            top: `${e.clientY - startPosOffsetY}px`,
            left: `${e.clientX - startPosOffsetX}px`,
            width: `${dragginBox.width}px`,
            height: `${dragginBox.height}px`,
        });
    };

    function handleDrag(e) {
        e.preventDefault();
        Object.assign(dummyDraggable.style, {
            top: `${e.clientY - startPosOffsetY}px`,
            left: `${e.clientX - startPosOffsetX}px`,
        });
        const afterElement = getDragAfterElement(container, e.clientY);
        if (dragging == null) {
            return;
        }
        if (afterElement == null) {
            container.appendChild(dragging);
        } else {
            container.insertBefore(dragging, afterElement);
        }
    };

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    };

    function reIndexItems() {
        const items = [...container.querySelectorAll('.draggable')];
        items.forEach((item, index) => {
            item.querySelector('.number').textContent = index + 1;
        });
    }
});

