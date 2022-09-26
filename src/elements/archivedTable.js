import {createArchivedNotes} from "../dataStore/archivedNotes";
import {insertProperImage} from "../helpers/insertProperImage";

export const createArchivedTable = () => {
  const archivedTable = document.createElement('table');

  archivedTable.innerHTML = ` 
   <thead>
     <tr>
      <th> </th>
      <th>Note Category</th>
      <th>Active</th>
      <th>Archived</th>
    </tr>
  </thead>`;

  const body = archivedTable.createTBody();

  const archivedData = createArchivedNotes();

  try {
    archivedData.forEach((row) => {
      let tr = body.appendChild(document.createElement('tr'));

      Object.keys(row).forEach((column) =>  {
        let td = tr.insertCell();

        column === 'id' ? insertProperImage(row.category, td) : td.innerText = row[column];
      })

    });
  } catch (err) {
    const tr = body.insertRow();
    tr.innerText = 'Cannot find data';
    body.appendChild(tr);
    throw new Error(err);
  }

  return archivedTable;
}


// const s = mockData.reduce((acc, current) => {
//     return {...acc, [current.category]: {active: 0, archived: 0}};
// }, {});