document.addEventListener('DOMContentLoaded',function(){

  //define the constructor for the runners add the 8 female runners with all details
  function Runner(first,last,lapone,laptwo){
    this.firstName = first;
    this.lastName = last;
    this.lapOne = lapone;
    this.lapTwo = laptwo;
    this.fullDetails = () => {return this.firstName + " " + this.lastName + " " + this.lapOne + " " + this.lapTwo;}
  };

  var runner1 = new Runner("Kalimba","Runfast",45,54);
  var runner2 = new Runner("Fyfy","Jones",46,42);
  var runner3 = new Runner("Eva","Schmidt",38,45);
  var runner4 = new Runner("Vanessa","Martin",40,40);
  var runner5 = new Runner("Kara","Nielson",95,65);
  var runner6 = new Runner("Andy","Fasttrack",64,73);
  var runner7 = new Runner("Martina","Doe",56,43);
  var runner8 = new Runner("Andreea","Bocelli",41,42);

  var runnersAll= [runner1,runner2,runner3,runner4,runner5,runner6,runner7,runner8];
  console.log(runnersAll);
  var runnersNextStage = [...runnersAll];
  console.log(runnersNextStage);
  var small1 = [];
  var small2 = [];
  var foundSmall1;
  var foundSmall2;

  (function lapps(){
    const lapps = document.querySelector('#firstdisplay');

    for ( let i=0; i <= runnersAll.length; i++){

      //work//////////////////////////////////////////////////////////
      if (runnersAll[i].lapOne <= 50 || runnersAll[i].lapTwo <= 50){

        //get the smallest value from lapone column
        small1.push(runnersAll[i].lapOne);
        small1.sort();
        foundSmall1 = small1[0];
        console.log("the value of small1 :",small1, foundSmall1);

        //get the smallest value from laptwo coulmn
        small2.push(runnersAll[i].lapTwo);
        small2.sort();
        foundSmall2 = small2[0];
        console.log("the value of small2:",small2,foundSmall2);

        for(let j = 0; j<runnersAll.length; j++){
          if (runnersAll[j].lapOne == small1[0]){
            console.log("the fastest runner at lap 1 is : ",runnersAll[j].fullDetails());
            document.getElementById('fastestathlete').innerText = "Fastest lap was completed by : " + runnersAll[j].firstName + " " +
            runnersAll[j].lastName + " in  " + runnersAll[j].lapOne + " seconds.";

          }else if(runnersAll[j].lapTwo == small1[0]){
            console.log(runnersAll[j].fullDetails());
          };
          if (runnersAll[j].lapOne == small2[0]){
            console.log("the fastest runner at lap 2 is : ",runnersAll[j].fullDetails());
          /*  document.getElementById('fastestathlete').innerText = "Fastest lap was completed by : " + runnersAll[j].firstName + " " +
            runnersAll[j].lastName + " in  " + runnersAll[j].lapOne + " seconds."*/
          }else if(runnersAll[j].lapTwo == small2[0]){
            console.log(runnersAll[j].fullDetails());
          };

        };
        //work//////////////////////////////////////////////////////////

        var qualified = runnersAll[i];
        console.log("qualified runner: ", qualified);

        //creating the tablefor the qualified runners
        const tableRowQualified = document.createElement('tr');
        const tableFirst = document.createElement('td');
        const tableLast = document.createElement('td');
        const tableLapOne = document.createElement('td');
        const tableLapTwo = document.createElement('td');
        const tableYes = document.createElement('td');

        //merging elements for the table
        tableRowQualified.appendChild(tableFirst);
        tableRowQualified.appendChild(tableLast);
        tableRowQualified.appendChild(tableLapOne);
        tableRowQualified.appendChild(tableLapTwo);
        tableRowQualified.appendChild(tableYes);

        //adding content to the parts
        tableFirst.textContent = (i+1) + ". " + runnersAll[i].firstName;
        tableLast.textContent = runnersAll[i].lastName;
        tableLapOne.textContent = runnersAll[i].lapOne + " sec";
        if(runnersAll[i].lapOne<=50){
          tableLapOne.bgColor = "lime";
        }else{tableLapOne.bgColor = "red"; }
        tableLapTwo.textContent = runnersAll[i].lapTwo + " sec";
        if(runnersAll[i].lapTwo<=50){
          tableLapTwo.bgColor = "lime";
        }else{tableLapTwo.bgColor = "red"; }
        tableYes.textContent = "Yes";

        //appending the merged element to the table
        lapps.appendChild(tableRowQualified);

      }else if(runnersAll[i].lapOne > 50 && runnersAll[i].lapTwo > 50){
        var desqualified = runnersAll[i];
        console.log("not qualified",desqualified);

        //creating the tablefor the qualified runners
        const tableRowDesqualified = document.createElement('tr');
        const tableFirst = document.createElement('td');
        const tableLast = document.createElement('td');
        const tableLapOne = document.createElement('td');
        const tableLapTwo = document.createElement('td');
        const tableYes = document.createElement('td');

        //merging elements for the table
        tableRowDesqualified.appendChild(tableFirst);
        tableRowDesqualified.appendChild(tableLast);
        tableRowDesqualified.appendChild(tableLapOne);
        tableRowDesqualified.appendChild(tableLapTwo);
        tableRowDesqualified.appendChild(tableYes);

        //adding content to the parts
        tableFirst.textContent = (i+1) + ". " + runnersAll[i].firstName;
        tableLast.textContent = runnersAll[i].lastName;
        tableLapOne.textContent = runnersAll[i].lapOne + " sec";
        if(runnersAll[i].lapOne<=50){
          tableLapOne.bgColor = "lime";
        }else{tableLapOne.bgColor = "red"; }
        tableLapTwo.textContent = runnersAll[i].lapTwo + " sec";
        if(runnersAll[i].lapTwo<=50){
          tableLapTwo.bgColor = "lime";
        }else{tableLapTwo.bgColor = "red"; }
        tableYes.textContent = "No";

        //appending the merged element to the table
        lapps.appendChild(tableRowDesqualified);
        ///
      };
    };
  })();// end of function lapps
});
