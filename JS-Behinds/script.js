//High level
//Any computer program needs resouces:memory, cpu
//C:Low level:Developer has to manage resources manually
//JS:High level: Develeoper does NOT have to worry, everything happens automatically

//Grabage-collect: Cleaning the memory so we don't have to...


//Multi-paradigm: An approch and mindset of structuring code. which will direct your coding style and techinque.
//1-Procedural programming
//2- Object-oriented programming(OOP)
//3- Functional programming(FP)

//prototype:in js every obj has a hidden property called prototype

//first class fns :fns simply trated as variables. we can pass them into other fns and return them from fns.
//passing a fn into another fn as an argument : First-class fns!
/*
function closeModel() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
overlay.addEventListener('click',closeModel) // this closeModel is first-class fn
*/

//Dynamic : dynamically typed

//single-theaded :
//Concurrency model: how the js engine handles multiple tasks happening at the same time.

//why do need that? : js runs in one sinhle thread. so it can only do one thing at a time .

//what is js engine: program thet excutes js code.-chrome
//all engine contains a callstack- where our code executed, and heap: where objects are stored.

//Compilation vs Interpretation
//Compilation: entire code is converted to mechine code  at once and written to a binary file that can be executed by a computer.
//INterpretation: interpreter runs through the source code and excutes it line by line.

//ENGINE: parsing -read the code, compilation: generate AST to convert to mechine code, Exceution in call stack

//Compilation create of global execution context (for top-level code : not inside fn)

    //Excution Context: environment in which a piece of js is executed . stores  all the necessary information for some code to ne executed,
    //eg: we oreder a pizza it comes in box that box is execution context that pizza is the js code 

//execution of top level code (inside global EC)
   //defult context created forrcode that is not inside ant fn (top level)
  
 //execution of fns and waiting for callbacks : eg like event callback

/**----------- */
//what inside a execution context 

//1- variable environment
  // let, const, and var declaretions     //Generate during creation phase right before execution
  //fns
  //arguments object 
//2-scope chain 
//3-this keyword // NOT in arrow fns
