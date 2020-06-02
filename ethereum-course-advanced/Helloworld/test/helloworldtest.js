// const Helloworld = artifacts.require("Helloworld");
//
// contract("Helloworld", async function(){
//   it("should initialize correctly", async function(){
//     let instance = await Helloworld.deployed();
//     let message = await instance.getMessage();
//     assert(message === "Hello Again!");
//   });
// });


// const Helloworld = artifacts.require("Helloworld");
//
// contract("Helloworld", async function(){
//   it("should initialize correctly", async function(){
//     let instance = await Helloworld.deployed();
//     console.log("this is this instance");
//     console.log(instance);
//     let message = await instance.getMessage();
//     assert(message === "Hello Again!");
//   });
// });


const Helloworld = artifacts.require("Helloworld");

  contract("Helloworld", async function(){
    it("should initialize correctly", async function(){
      let instance = await Helloworld.deployed();
      let message = await instance.getMessage();
      console.log("this is the message");
      console.log(message);
      assert(message === "Hello Again!", "Error with my message");
  });
});



// const Helloworld = artifacts.require("Helloworld");
//
//   contract("Helloworld", async function(){
//     it("should initialize correctly", async function(){
//       let instance = await Helloworld.deployed();
//       let message = await instance.getMessage();
//       console.log("this is the message");
//       console.log(message);
//       assert(true);
//   });
// });
