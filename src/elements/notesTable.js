import task from "../assets/task.png";
import thought from "../assets/thought.png";
import idea from "../assets/idea.png";
import quote from "../assets/quote.png";
import {mockData} from "../dataStore/noteList";
import {insertProperImage} from "../helpers/insertProperImage";

export const createActiveTable = () => {
  const notesTable = document.createElement('table');

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
      <a>Archive</a>
      <a>Delete</a>
    </th>
  </tr>
</thead>`;

  const listBody = document.createElement('tbody');
  notesTable.appendChild(listBody);

  try {
    mockData.forEach((row) => {
      if (row.active === true) {
        let tr = listBody.appendChild(document.createElement('tr'));

        Object.keys(row).forEach((column) =>  {
          if (column !== 'active') {
            let td = tr.insertCell();

            column === 'id' ? insertProperImage(row.category, td) : td.innerText = row[column];
          }
        })
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
