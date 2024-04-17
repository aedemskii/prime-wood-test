import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementsByTagName('body')[0];
    const container = document.getElementById('container');
    const dummyDraggable = document.getElementById('dummy-draggable');
    const touchDevice = isTouchDevice();
    const dragStartEvent = touchDevice ? 'touchstart' : 'mousedown';
    const dragEndEvent = touchDevice ? 'touchend' : 'mouseup';
    const dragMoveEvent = touchDevice ? 'touchmove' : 'mousemove';

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
            draggable.addEventListener(dragStartEvent, (e) => {
                e.preventDefault();
                dragging = draggable;
                setDummyDraggable(draggable, e);
                draggable.classList.add('dragging');
                body.addEventListener(dragMoveEvent, handleDrag);
            });
        });
        body.addEventListener(dragEndEvent, () => {
            if (dragging == null) {
                return;
            }
            dragging.classList.remove('dragging');
            dragging = null;
            body.removeEventListener(dragMoveEvent, handleDrag);
            dummyDraggable.style.display = 'none';
            dummyDraggable.innerHTML = '';
            reIndexItems();
        });
    };

    function setDummyDraggable(draggable, e) {
        const draggableClone = draggable.cloneNode(true);
        const dragginBox = draggable.getBoundingClientRect();
        const { x, y } = getPos(e);
        startPosOffsetX = x - dragginBox.left;
        startPosOffsetY = y - dragginBox.top;
        dummyDraggable.appendChild(draggableClone);
        Object.assign(dummyDraggable.style, {
            display: 'block',
            top: `${y - startPosOffsetY}px`,
            left: `${x - startPosOffsetX}px`,
            width: `${dragginBox.width}px`,
            height: `${dragginBox.height}px`,
        });
    };

    function handleDrag(e) {
        const { x, y } = getPos(e);
        Object.assign(dummyDraggable.style, {
            top: `${y - startPosOffsetY}px`,
            left: `${x - startPosOffsetX}px`,
        });
        const afterElement = getDragAfterElement(container, y);
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
    };

    function isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    };

    function getPos(e) {
        let x = 0;
        let y = 0;
        if (touchDevice) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        } else {
            x = e.clientX;
            y = e.clientY;
        }
        return { x, y };
    };
});

