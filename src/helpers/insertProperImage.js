import task from "../assets/task.png";
import thought from "../assets/thought.png";
import idea from "../assets/idea.png";
import quote from "../assets/quote.png";

export const insertProperImage = (category, td) => {
      switch (category) {
      case 'Task' : td.innerHTML = `<img src=${task} alt="task" style="width: 30px; height: 30px;">`; break;
      case 'Random Thought' : td.innerHTML = `<img src=${thought} alt="thought" style="width: 30px; height: 30px;">`; break;
      case 'Idea' : td.innerHTML = `<img src=${idea} alt="idea" style="width: 30px; height: 30px;">`; break;
      case 'Quite' : td.innerHTML = `<img src=${quote} alt="quote" style="width: 30px; height: 30px;">`; break;
    }
}