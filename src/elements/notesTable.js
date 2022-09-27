import {insertProperImage} from "../helpers/insertProperImage";
import removePng from '../assets/delete.png';
import archivePng from '../assets/archive.png';
import {createHandler} from "../helpers/createHandler";
import '../styles/notesTable.css';

export const createActiveTable = (currentData) => {

  const notesTable = document.createElement('table');
  notesTable.classList.add("notesTable");
  notesTable.innerHTML = ` 
 <thead>
   <tr>
    <th> </th>
    <th>Name</th>
    <th>Created</th>
    <th>Category</th>
    <th>Content</th>
    <th>Dates</th>
    <th>
      <button id="archiveAllBtn"><img src=${archivePng} alt="archive"></button>
      <button id="deleteAllBtn"><img src=${removePng} alt="delete"></button>
    </th>
  </tr>
</thead>`;

  const listBody = document.createElement('tbody');
  notesTable.appendChild(listBody);

  try {
    currentData.forEach((row) => {
      if (row.active === true) {
        let tr = listBody.appendChild(document.createElement('tr'));

        Object.keys(row).forEach((column) =>  {
          if (column !== 'active') {
            let td = tr.insertCell();

            column === 'id' ? insertProperImage(row.category, td) : td.innerText = row[column];
          }
        });
        let td = tr.insertCell();

        const actions = ['edit', 'delete', 'archive'];
        actions.forEach(action => {
          let btn = document.createElement('button');
          insertProperImage(action, btn);
          createHandler(btn, action, row.id);
          td.appendChild(btn);
        });

      }
    });
  } catch (err) {
    const tr = listBody.appendChild(document.createElement('tr'));
    tr.innerText = 'Cannot find data';
    listBody.appendChild(tr);
    throw new Error(err);
  }

  return notesTable;
}
