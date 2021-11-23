users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]
  
  //function iterador(aquiLista)

  function usersLanguages( name , lastname , languages ){
    this.name = name;
    this.lastname = lastname;
    this.lang = lang;
    this.printInfo = function(){
    return console.log( this.name + " " + this.lastname + " knows " + this.lang );
    }

}
let show = new usersLanguages(users[0].fname, users[0].lname, users[0].languages)
console.log(show.printInfo()) 
// return para definir el undefined 
console.log("********************************************")
console.log(users[2].fname);
