const QuizSample = [
  {
    id: 1,
    title: "ฟังก์ชั่นคำนวณหาพื้นที่ (กว้าง * สูง ) จงเติมคำในช่องว่าง",
    type_Quiz: "key",
    keyEdit: `function getArea( width , height ){  
      return Number( %i% ) * Number( %i1% ) ; `,

    correctInput: "width" || "height",
    correctInput1: "height" || "width",
    correctInput2: "",
  },
  {
    id: 2,
    title: "สำหรับการประกาศตัวแปรใน JavaScript คำสั่งใดที่ถูกต้อง?",
    type_Quiz: "select",
    QuizChoice: [
      "var x = 5;",
      "let x = 5;",
      "const x = 5;",
      "all of the above(ทั้งหมดข้างต้น)",
    ],
    correctchoice: "all of the above(ทั้งหมดข้างต้น)",
    ans: null,
  },
  {
    id: 3,
    title: "ฟังก์ชั่นคำนวณหาพื้นที่วงกลม (PI * r ** 2) จงเติมคำในช่องว่าง",
    type_Quiz: "key",
    keyEdit: `function calculateCircleArea(radius){
       return %i% .PI *  %i1%  ** %i2%   ;  
      }`,
    correctInput: "Math",
    correctInput1: "radius",
    correctInput2: "2",
  },
  {
    id: 4,
    title: (
      <>
        จากโค้ดต่อไปนี้ใน Javascript : <br />
        let x =5;
        <br />
        let y = 10;
        <br />
        let result = x + y; <br />
        ค่าตัวแปรของ result คืออะไร
      </>
    ),
    type_Quiz: "select",
    keyEdit: "",
    QuizChoice: ["15", "510", '"510"', "Error"],
    correctchoice: '"510"',
    ans: null,
  },
  {
    id: 5,
    title: "ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_Quiz: "key",
    keyEdit: `const fruits = ["apple", "orange", "papaya"] ; 
    fruits.forEach((fruit, index) => {
      if (index === 1) {
        return;
      } else {
        return console.log(fruit) ; 
      }
    }) ; 
    %i%  `,
    correctInput: "apple,papaya",
    correctInput1: "",
    correctInput2: "",
  },
  {
    id: 6,
    title:
      "ใน JavaScript, คำสั่งใดที่ใช้ในการกำหนดเงื่อนไขเพื่อทำงานแบบเลือก (conditional)?",
    type_Quiz: "select",
    keyEdit: "",
    QuizChoice: ["for", "while", "if", "switch"],
    correctchoice: "if",
    ans: null,
  },
  {
    id: 7,
    title:
      "จงประกาศประเภทของตัวแปรต่อไปนี้ และ ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_Quiz: "key",
    keyEdit: `
    %i%  date = new Date() ;
           date = "today" ;
    %i1% text = "Hello World!" ;
           var text = "Hi!" ;

    console.log(text) ;
  %i2% 
    `,

    correctInput: "let" || "var",
    correctInput1: "var",
    correctInput2: "Hi!",
  },
  {
    id: 8,
    title: "คำสั่งใดที่ใช้ในการเขียนข้อความลงในคอนโซล (console) ใน JavaScript?",
    type_Quiz: "select",
    keyEdit: "",
    QuizChoice: ["print()", "log()", "write()", "display()", "log"],
    correctchoice: "log()",
    ans: null,
  },
  {
    id: 9,
    title: "ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_Quiz: "key",
    keyEdit: `const primeNumbers = [2, 3, 5, 7, 11] ;
    for (let i = 0; i < primeNumbers.length; i++) {
      const primeNumber = primeNumbers[i];
      if (primeNumber > 5 || primeNumber < 11) {
        return console.log(primeNumber);
      } else {
        return ;
      }
    } 
    %i% `,
    correctInput: "2,3,5,7,11",
    correctInput1: "",
    correctInput2: "",
  },
  {
    id: 10,
    title:
      "ใน JavaScript, การใช้งานโครงสร้างข้อมูลแบบ Array สามารถทำได้โดยใช้คำสั่งใด?",
    type_Quiz: "select",
    keyEdit: "",
    QuizChoice: ["newSet()", "newMap()", "newArray()", "new Array()"],
    correctchoice: "new Array()",
    ans: null,
  },
  {
    id: 11,
    title:
      "สำหรับฟังก์ชันใน JavaScript, คำสั่งใดที่ใช้ในการส่งค่ากลับ (return value) จากฟังก์ชัน?",
    type_Quiz: "select",
    QuizChoice: ["yield", "send", "return", "callback"],
    correctchoice: "return",
    ans: null,
  },
  {
    id: 12,
    title: "div01 และ div02 จะมีค่าข้างในเป็นอะไรบ้าง",
    type_Quiz: "key",
    awswer: "",

    keyEdit: `<div id="name" class="div01"> %i% </div>;
    <div id="sur_name" class="div02"> %i1% </div>;
    
    const person = {
      name: "Thitipong",
      sur_name: "Manajit",
      age: 30,
      city: "New York",
      introduce: function () {
        document.querySelector("#name").innerText = this.name;
        document.getElementById("name").innerText = this.city;
        document.querySelector("#sur_name").innerText = this.age;
      },
    };
    person.name = "Pichapetch";
    person.introduce();
    person.age = 18;
     `,
    correctInput: "New York",
    correctInput1: "30",
    correctInput2: "",
  },
  {
    id: 13,
    title: "จงเติมคำในช่องว่างให้ถูกต้อง",
    type_Quiz: "key",
    keyEdit: `const favoriteColor = "red";
    switch ( %i% ) {
      case "red":
        console.log("Your favorite color is red!");
        break;
      case "blue":
        console.log("Your favorite color is blue!");
        break;
      case "green":
        console.log("Your favorite color is green!");
        break;
      %i1% : console.log(
        "Your favorite color is neither red, blue, nor green!"
      );
    }
     `,
    correctInput: "favoriteColor",
    correctInput1: "default",
    correctInput2: "",
  },
  {
    id: 14,
    title: `จาก Loop ข้างต้นต้องการที่จะแสดงผลเป็นตัวเลขตั้งแต่ 0-9 จงเติมคำตอบลงในช่องว่างให้ถูกต้อง`,
    type_Quiz: "key",
    keyEdit: `for (let i = %i% ; i < 10; %i1% ;) {
      console.log(i);
    }
     `,
    correctInput: "0",
    correctInput1: "i++" || "i+=1",
    correctInput2: "",
  },
  {
    id: 15,
    title: `ต้องการที่จะลบค่าตัวสุดท้ายจาก answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_Quiz: "key",
    keyEdit: `
    const answers = ["yes", "no", "error"];
      answers. %i% ;
    
     `,
    correctInput: "pop()",
    correctInput1: "",
    correctInput2: "",
  },
  {
    id: 16,
    title: `ต้องการที่จะลบค่าตัวแรกจาก answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_Quiz: "key",
    keyEdit: `
    const answers = ["yes", "no", "error"];
      answers. %i% ;
    
     `,
    correctInput: "shift()",
    correctInput1: "",
    correctInput2: "",
  },
  {
    id: 17,
    title: `ต้องการที่จะเพิ่มค่าต่อจากตัวสุดท้ายโดยให้ค่าเป็น newAnswer เข้าไปใน answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_Quiz: "key",
    keyEdit: `
const answers = ["yes", "no", "error"];
const newAnswer = "undefined";
answers. %i% ( %i1% );
     `,
    correctInput: "push",
    correctInput1: "newAnswer",
    correctInput2: "",
  },
  {
    id: 18,
    title: `ต้องการที่จะเปลี่ยนค่า “no” ให้ค่าเป็นตัวแปร newAnswer ใน answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง`,
    type_Quiz: "key",
    keyEdit: `const answers = ["yes", "no", "error"];
    const newAnswer = "undefined";
    answers %i% = %i1% ;
    `,
    correctInput: "[1]" || "at(1)",
    correctInput1: "newAnswer",
    correctInput2: "",
  },
  {
    id: 19,
    title: `ต้องการที่จะเปลี่ยนคำว่า “YesWebDesignStudio” ให้เป็น “YWDS” จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_Quiz: "key",
    keyEdit: `let text = "Please visit YesWebDesignStudio!";
    console.log(text. %i% ("YesWebDesignStudio", "YWDS"))
    Output: "Please visit YWDS!"
    `,
    correctInput: "replace",
    correctInput1: "",
    correctInput2: "",
  },
  {
    id: 20,
    title: `ต้องการที่จะให้ค่าตอบกลับออกมาเป็น True จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง`,
    type_Quiz: "key",
    keyEdit: `const text = "Please visit YesWebDesignStudio!";
    if (text. %i% ("YesWebDesignStudio")) {
      return true;
    } else {
      return false;
    }
    `,
    correctInput: "includes",
    correctInput1: "",
    correctInput2: "",
  },
];

export default QuizSample;
/*

echo data : data

{
  id : 1
  question : 22slkad
}

*/
/*




quiz 1
ind == 0
index == 4
quiz 1
ind == 1
index == 4

Ex. มี 5 ข้อ
onClick setActiveChoice === 4
ind 0-3


0 1 
1 3 
2 3
3 2
4 3


*/
