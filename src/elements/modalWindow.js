import '../styles/modalWindow.css';

export const openModal = () => {
  const modalWindow = document.createElement('div');
  modalWindow.setAttribute('id','modalWindow');
  modalWindow.classList.add("modalContainer");
  modalWindow.classList.add("modalContainer_open");

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = 'X';
  closeBtn.className = 'closeBtn';
  modalWindow.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => {
    modalWindow.classList.remove("modalContainer_open");
    modalWindow.classList.add("modalContainer_close");
  })

  const form = document.createElement('form');
  form.innerHTML = `
    <form>
            <div>
              <label for="name">Name:</label>
              <input id="name" type="text" name="name">
            </div>

            <div>
              <label for="date">Created:</label>
              <input id="date" type="datetime-local" name="date">
            </div>

            <div>
              <label for="category">Category:</label>
              <select id="category">
                <option value="task">Task</option>
                <option value="thought">Random Thought</option>
                <option value="idea">Idea</option>
                <option value="quote">Quite</option>
              </select>
            </div>

            <div>
              <label for="content">Content:</label>
              <input id="content" type="text" name="content">
            </div>

            <div>
              <label for="dates">Dates:</label>
              <input id="dates" type="text" name="dates">
            </div>
        </form>
  `;

  modalWindow.appendChild(form);

  return modalWindow;
}