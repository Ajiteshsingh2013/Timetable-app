const scheduleData = {
    Monday: ["", "", "", "", ""],
    Tuesday: ["", "", "", "", ""],
    Wednesday: ["", "", "", "", ""],
    Thursday: ["", "", "", "", ""],
    Friday: ["", "", "", "", ""],
  };
  
  const tabs = document.querySelectorAll(".tab");
  const scheduleEl = document.getElementById("schedule");
  
  function renderSchedule(day) {
    scheduleEl.innerHTML = "";
  
    scheduleData[day].forEach((subject, index) => {
      const periodDiv = document.createElement("div");
      periodDiv.className = "period";
  
      const label = document.createElement("label");
      label.textContent = `Period ${index + 1}:`;
  
      const input = document.createElement("input");
      input.value = subject;
      input.placeholder = "Enter subject...";
      input.addEventListener("input", () => {
        scheduleData[day][index] = input.value;
      });
  
      periodDiv.appendChild(label);
      periodDiv.appendChild(input);
      scheduleEl.appendChild(periodDiv);
    });
  }
  
  // Switch day when clicking a tab
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelector(".tab.active").classList.remove("active");
      tab.classList.add("active");
      renderSchedule(tab.dataset.day);
    });
  });
  
  // Initial render
  renderSchedule("Monday");

  
  