//Descrizione:
//Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
//text, una stringa che indica il testo del todo
//done, un booleano (true/false) che indica se il todo è stato fatto oppure no
//MILESTONE 1
//tampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
//MILESTONE 2
//Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
//MILESTONE 3
//Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.




const { createApp } = Vue
    
createApp({
  data() {
    return {
      todoList: [{
         text: "comprare il latte di mandorla",
         done: true
      },
      {
        text: "impacchettare vestiti invernali",
        done: false
     },
     {
        text: "spedire una lettera",
        done: true
     },
     {
        text: "leggere Guerra e Pace",
        done: true
     },
     {
        text: "guardare l'ultimo film di Celine Sciamma",
        done: false
     },
     
     {
        text: "ascoltare il disco di bbyMutha",
        done: true
     },

     {
        text: "bere 2 litri d'acqua",
        done: false
     },
      ],
      newElement : "",
    }
  },
  methods: {
       addNewTodoElement(todoElement) {
        this.todoList.push(todoElement.text)
        this.newElement = ""
       },

       removeTodoElement(todoElementIndex){
        if(todoElementIndex >= this.todoList.length || todoElementIndex < 0){
             console.warn("occhio!")
        } else {
             this.todoList.splice(todoElementIndex, 1);
        }
       }

  },
}).mount('#app')

