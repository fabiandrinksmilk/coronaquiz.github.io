if ("serviceWorker" in navigator) {
  // register service worker
  navigator.serviceWorker.register("service-worker.js");
}

const questions = ["Hoeveel afstand moet je in Nederland houden?", "Wat is GEEN COVID-19 symptoom?", "Waar was de eerste COVID-19 besmetting?", "Hoe oud is de oudste persoon die COVID-19 heeft overleeft?", "Wat is de boete voor geen mondkapje dragen in het openbaar vervoer?", "Wanneer was de eerst COVID-19 besmetting?", "Hoeveel afstand wordt er in het Verenigd Koninkrijk gehouden?", "Waar zijn de meeste COVID-19 besmettingen?"];
      const goodAwnsers = ["2", "3", "1", "4", "3", "1", "3", "2"];
      const awnser1 = ["1 meter", "Koorts", "Wuhan", "111", "85", "December 2019", "1 meter", "Nederland"];
      const awnser2 = ["1,5 meter", "Kortademigheid", "Dongguan", "99", "90", "Januari 2020", "1,5 meter", "Verenigde Staten"];
      const awnser3 = ["2 meter", "Haarverlies", "Tokyo", "113", "95", "Februari 2020", "2 meter", "China"];
      const awnser4 = ["2,5 meter", "Diaree", "Addis Ababa", "107", "100", "Maart 2020", "2,5 meter", "Italië"];

      let correctAwnsers = 0;
      let wrongAwnsers = [];
      let selectedQuestion = 0;
      let questionAwnsered = false;
      const awnserText1 = document.getElementById("awnserText1");
      const awnserText2 = document.getElementById("awnserText2");
      const awnserText3 = document.getElementById("awnserText3");
      const awnserText4 = document.getElementById("awnserText4");
      const progressBar = document.getElementById("progressBar");
      const questionText = document.getElementById("questionText");
      const headerText = document.getElementById("headerText");
      awnserText1.innerHTML = awnser1[selectedQuestion];
      awnserText2.innerHTML = awnser2[selectedQuestion];
      awnserText3.innerHTML = awnser3[selectedQuestion];
      awnserText4.innerHTML = awnser4[selectedQuestion];
      questionText.innerHTML = questions[selectedQuestion];
      progressBar.style.width = "0%";
      headerText.innerHTML = "Vraag " + (selectedQuestion + 1) + "/" + questions.length;

      function awnser(i) {
        if (questionAwnsered == false) {
          const awnserBox = document.getElementById("awnser" + i);
          if (goodAwnsers[selectedQuestion] == i) {
            awnserBox.style.backgroundColor = "rgb(10, 200, 10)";
            correctAwnsers++;
            questionAwnsered = true
            setTimeout(function() {
              awnserBox.removeAttribute("style")
              nextQuestion();
            }, 1000);
          } else {
            awnserBox.style.backgroundColor = "rgb(200, 10, 10)";
            wrongAwnsers.push(questions[selectedQuestion]);
            questionAwnsered = true;
            setTimeout(function() {
              awnserBox.removeAttribute("style")
              nextQuestion();
            }, 1000);
          }
        }
      }

      function nextQuestion() {
        selectedQuestion++;
        if (selectedQuestion < questions.length) {
          questionAwnsered = false;
          headerText.innerHTML = "Vraag " + (selectedQuestion + 1) + "/" + questions.length;
          progressBar.style.width = 100 / selectedQuestion * correctAwnsers + "%";
          questionText.innerHTML = questions[selectedQuestion];
          awnserText1.innerHTML = awnser1[selectedQuestion];
          awnserText2.innerHTML = awnser2[selectedQuestion];
          awnserText3.innerHTML = awnser3[selectedQuestion];
          awnserText4.innerHTML = awnser4[selectedQuestion];
        } else {
          headerText.innerHTML = "Einde"
          document.querySelector("#questionText").style.display = "none";
          document.querySelector("#awnser1").style.display = "none";
          document.querySelector("#awnser2").style.display = "none";
          document.querySelector("#awnser3").style.display = "none";
          document.querySelector("#awnser4").style.display = "none";
          showEndScreen()
        }
      }

      function showEndScreen() {
        if (100 / questions.length * correctAwnsers > 55) {
          document.getElementById("scoreText").innerHTML = "gefeliciteerd, je hebt " + (100 / questions.length * correctAwnsers) + "% van de vragen goed.";
          	document.getElementById("statsText").innerHTML = "vragen fout: <br>"+ "<br>" + wrongAwnsers.join("<br>");
        } else {
          document.getElementById("scoreText").innerHTML = "Helaas, je hebt " + (100 / questions.length * correctAwnsers) + "% van de vragen goed.";
          document.getElementById("statsText").innerHTML = "vragen fout: <br>" + "<br>" + wrongAwnsers.join("<br>");
        }
      }
