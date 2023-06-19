const QuizSample = [
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 1,
    title: "ฟังก์ชั่นคำนวณหาพื้นที่ (กว้าง * สูง ) จงเติมคำในช่องว่าง",
    type_Quiz: "key",
    keyEdit: `function getArea( width , height ){  
=======
=======
>>>>>>> Stashed changes
    question_id: 1,
    question: "ฟังก์ชั่นคำนวณหาพื้นที่ (กว้าง * สูง ) จงเติมคำในช่องว่าง",
    type_question: "key",
    sub_question: `function getArea( width , height ){  
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      return Number( %i% ) * Number( %i1% ) ; `,
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 2,
    title: "สำหรับการประกาศตัวแปรใน JavaScript คำสั่งใดที่ถูกต้อง?",
    type_Quiz: "select",
    QuizChoice: [
=======
=======
>>>>>>> Stashed changes
    question_id: 2,
    question: "สำหรับการประกาศตัวแปรใน JavaScript คำสั่งใดที่ถูกต้อง?",
    type_question: "select",
    choices: [
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      "var x = 5;",
      "let x = 5;",
      "const x = 5;",
      "all of the above(ทั้งหมดข้างต้น)",
    ],
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 3,
    title: "ฟังก์ชั่นคำนวณหาพื้นที่วงกลม (PI * r ** 2) จงเติมคำในช่องว่าง",
    type_Quiz: "key",
    keyEdit: `function calculateCircleArea(radius){
=======
=======
>>>>>>> Stashed changes
    question_id: 3,
    question: "ฟังก์ชั่นคำนวณหาพื้นที่วงกลม (PI * r ** 2) จงเติมคำในช่องว่าง",
    type_question: "key",
    sub_question: `function calculateCircleArea(radius){
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
       return %i% .PI *  %i1%  ** %i2%   ;  
      }`,
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 4,
    title: (
=======
    question_id: 4,
    question: (
>>>>>>> Stashed changes
=======
    question_id: 4,
    question: (
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    type_Quiz: "select",
    keyEdit: "",
    QuizChoice: ["15", "510", '"510"', "Error"],
=======
    type_question: "select",
    sub_question: "",
    choices: ["15", "510", '"510"', "Error"],
>>>>>>> Stashed changes
    correctchoice: '"510"',
    ans: null,
  },
  {
<<<<<<< Updated upstream
    id: 5,
    title: "ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_Quiz: "key",
    keyEdit: `const fruits = ["apple", "orange", "papaya"] ; 
=======
=======
    type_question: "select",
    choices: ["15", "510", '"510"', "Error"],
  },
  {
>>>>>>> Stashed changes
    question_id: 5,
    question: "ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_question: "key",
    sub_question: `const fruits = ["apple", "orange", "papaya"] ; 
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    fruits.forEach((fruit, index) => {
      if (index === 1) {
        return;
      } else {
        return console.log(fruit) ; 
      }
    }) ; 
    %i%  `,
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 6,
    title:
      "ใน JavaScript, คำสั่งใดที่ใช้ในการกำหนดเงื่อนไขเพื่อทำงานแบบเลือก (conditional)?",
    type_Quiz: "select",
    keyEdit: "",
    QuizChoice: ["for", "while", "if", "switch"],
=======
    question_id: 6,
    question:
      "ใน JavaScript, คำสั่งใดที่ใช้ในการกำหนดเงื่อนไขเพื่อทำงานแบบเลือก (conditional)?",
    type_question: "select",
    sub_question: "",
    choices: ["for", "while", "if", "switch"],
>>>>>>> Stashed changes
    correctchoice: "if",
    ans: null,
  },
  {
<<<<<<< Updated upstream
    id: 7,
    title:
      "จงประกาศประเภทของตัวแปรต่อไปนี้ และ ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_Quiz: "key",
    keyEdit: `
=======
    question_id: 7,
    question:
      "จงประกาศประเภทของตัวแปรต่อไปนี้ และ ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_question: "key",
    sub_question: `
>>>>>>> Stashed changes
=======
    question_id: 6,
    question:
      "ใน JavaScript, คำสั่งใดที่ใช้ในการกำหนดเงื่อนไขเพื่อทำงานแบบเลือก (conditional)?",
    type_question: "select",
    choices: ["for", "while", "if", "switch"],
  },
  {
    question_id: 7,
    question:
      "จงประกาศประเภทของตัวแปรต่อไปนี้ และ ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_question: "key",
    sub_question: `
>>>>>>> Stashed changes
    %i%  date = new Date() ;
           date = "today" ;
    %i1% text = "Hello World!" ;
           var text = "Hi!" ;

    console.log(text) ;
  %i2% 
    `,
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 8,
    title: "คำสั่งใดที่ใช้ในการเขียนข้อความลงในคอนโซล (console) ใน JavaScript?",
    type_Quiz: "select",
    keyEdit: "",
    QuizChoice: ["print()", "log()", "write()", "display()", "log"],
=======
=======
>>>>>>> Stashed changes
    question_id: 8,
    question:
      "คำสั่งใดที่ใช้ในการเขียนข้อความลงในคอนโซล (console) ใน JavaScript?",
    type_question: "select",
<<<<<<< Updated upstream
    sub_question: "",
    choices: ["print()", "log()", "write()", "display()", "log"],
>>>>>>> Stashed changes
    correctchoice: "log()",
    ans: null,
  },
  {
<<<<<<< Updated upstream
    id: 9,
    title: "ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_Quiz: "key",
    keyEdit: `const primeNumbers = [2, 3, 5, 7, 11] ;
=======
=======
    choices: ["print()", "log()", "write()", "display()", "log"],
  },
  {
>>>>>>> Stashed changes
    question_id: 9,
    question: "ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_question: "key",
    sub_question: `const primeNumbers = [2, 3, 5, 7, 11] ;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    for (let i = 0; i < primeNumbers.length; i++) {
      const primeNumber = primeNumbers[i];
      if (primeNumber > 5 || primeNumber < 11) {
        return console.log(primeNumber);
      } else {
        return ;
      }
    } 
    %i% `,
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 10,
    title:
      "ใน JavaScript, การใช้งานโครงสร้างข้อมูลแบบ Array สามารถทำได้โดยใช้คำสั่งใด?",
    type_Quiz: "select",
    keyEdit: "",
    QuizChoice: ["newSet()", "newMap()", "newArray()", "new Array()"],
=======
    question_id: 10,
    question:
      "ใน JavaScript, การใช้งานโครงสร้างข้อมูลแบบ Array สามารถทำได้โดยใช้คำสั่งใด?",
    type_question: "select",
    sub_question: "",
    choices: ["newSet()", "newMap()", "newArray()", "new Array()"],
>>>>>>> Stashed changes
    correctchoice: "new Array()",
    ans: null,
  },
  {
<<<<<<< Updated upstream
    id: 11,
    title:
      "สำหรับฟังก์ชันใน JavaScript, คำสั่งใดที่ใช้ในการส่งค่ากลับ (return value) จากฟังก์ชัน?",
    type_Quiz: "select",
    QuizChoice: ["yield", "send", "return", "callback"],
=======
    question_id: 11,
    question:
      "สำหรับฟังก์ชันใน JavaScript, คำสั่งใดที่ใช้ในการส่งค่ากลับ (return value) จากฟังก์ชัน?",
    type_question: "select",
    choices: ["yield", "send", "return", "callback"],
>>>>>>> Stashed changes
    correctchoice: "return",
    ans: null,
  },
  {
<<<<<<< Updated upstream
    id: 12,
    title: "div01 และ div02 จะมีค่าข้างในเป็นอะไรบ้าง",
    type_Quiz: "key",
    awswer: "",

    keyEdit: `<div id="name" class="div01"> %i% </div>;
=======
    question_id: 12,
    question: "div01 และ div02 จะมีค่าข้างในเป็นอะไรบ้าง",
    type_question: "key",
    awswer: "",

    sub_question: `<div id="name" class="div01"> %i% </div>;
>>>>>>> Stashed changes
    <div id="sur_name" class="div02"> %i1% </div>;
=======
    question_id: 10,
    question:
      "ใน JavaScript, การใช้งานโครงสร้างข้อมูลแบบ Array สามารถทำได้โดยใช้คำสั่งใด?",
    type_question: "select",
    choices: ["newSet()", "newMap()", "newArray()", "new Array()"],
  },
  {
    question_id: 11,
    question:
      "สำหรับฟังก์ชันใน JavaScript, คำสั่งใดที่ใช้ในการส่งค่ากลับ (return value) จากฟังก์ชัน?",
    type_question: "select",
    choices: ["yield", "send", "return", "callback"],
  },
  {
    question_id: 12,
    question: "div01 และ div02 จะมีค่าข้างในเป็นอะไรบ้าง",
    type_question: "key",
    sub_question: `<divquestion_id="name" class="div01"> %i% </divquestion_id=>;
    <divquestion_id="sur_name" class="div02"> %i1% </divquestion_id=>;
>>>>>>> Stashed changes
    
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
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 13,
    title: "จงเติมคำในช่องว่างให้ถูกต้อง",
    type_Quiz: "key",
    keyEdit: `const favoriteColor = "red";
=======
=======
>>>>>>> Stashed changes
    question_id: 13,
    question: "จงเติมคำในช่องว่างให้ถูกต้อง",
    type_question: "key",
    sub_question: `const favoriteColor = "red";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 14,
    title: `จาก Loop ข้างต้นต้องการที่จะแสดงผลเป็นตัวเลขตั้งแต่ 0-9 จงเติมคำตอบลงในช่องว่างให้ถูกต้อง`,
    type_Quiz: "key",
    keyEdit: `for (let i = %i% ; i < 10; %i1% ;) {
=======
=======
>>>>>>> Stashed changes
    question_id: 14,
    question: `จาก Loop ข้างต้นต้องการที่จะแสดงผลเป็นตัวเลขตั้งแต่ 0-9 จงเติมคำตอบลงในช่องว่างให้ถูกต้อง`,
    type_question: "key",
    sub_question: `for (let i = %i% ; i < 10; %i1% ;) {
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      console.log(i);
    }
     `,
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 15,
    title: `ต้องการที่จะลบค่าตัวสุดท้ายจาก answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_Quiz: "key",
    keyEdit: `
=======
    question_id: 15,
    question: `ต้องการที่จะลบค่าตัวสุดท้ายจาก answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `
>>>>>>> Stashed changes
=======
    question_id: 15,
    question: `ต้องการที่จะลบค่าตัวสุดท้ายจาก answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `
>>>>>>> Stashed changes
    const answers = ["yes", "no", "error"];
      answers. %i% ;
    
     `,
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 16,
    title: `ต้องการที่จะลบค่าตัวแรกจาก answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_Quiz: "key",
    keyEdit: `
=======
    question_id: 16,
    question: `ต้องการที่จะลบค่าตัวแรกจาก answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `
>>>>>>> Stashed changes
=======
    question_id: 16,
    question: `ต้องการที่จะลบค่าตัวแรกจาก answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `
>>>>>>> Stashed changes
    const answers = ["yes", "no", "error"];
      answers. %i% ;
    
     `,
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 17,
    title: `ต้องการที่จะเพิ่มค่าต่อจากตัวสุดท้ายโดยให้ค่าเป็น newAnswer เข้าไปใน answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_Quiz: "key",
    keyEdit: `
=======
    question_id: 17,
    question: `ต้องการที่จะเพิ่มค่าต่อจากตัวสุดท้ายโดยให้ค่าเป็น newAnswer เข้าไปใน answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `
>>>>>>> Stashed changes
=======
    question_id: 17,
    question: `ต้องการที่จะเพิ่มค่าต่อจากตัวสุดท้ายโดยให้ค่าเป็น newAnswer เข้าไปใน answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `
>>>>>>> Stashed changes
const answers = ["yes", "no", "error"];
const newAnswer = "undefined";
answers. %i% ( %i1% );
     `,
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 18,
    title: `ต้องการที่จะเปลี่ยนค่า “no” ให้ค่าเป็นตัวแปร newAnswer ใน answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง`,
    type_Quiz: "key",
    keyEdit: `const answers = ["yes", "no", "error"];
=======
=======
>>>>>>> Stashed changes
    question_id: 18,
    question: `ต้องการที่จะเปลี่ยนค่า “no” ให้ค่าเป็นตัวแปร newAnswer ใน answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง`,
    type_question: "key",
    sub_question: `const answers = ["yes", "no", "error"];
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    const newAnswer = "undefined";
    answers %i% = %i1% ;
    `,
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 19,
    title: `ต้องการที่จะเปลี่ยนคำว่า “YesWebDesignStudio” ให้เป็น “YWDS” จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_Quiz: "key",
    keyEdit: `let text = "Please visit YesWebDesignStudio!";
=======
    question_id: 19,
    question: `ต้องการที่จะเปลี่ยนคำว่า “YesWebDesignStudio” ให้เป็น “YWDS” จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `let text = "Please visit YesWebDesignStudio!";
>>>>>>> Stashed changes
=======
    question_id: 19,
    question: `ต้องการที่จะเปลี่ยนคำว่า “YesWebDesignStudio” ให้เป็น “YWDS” จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `let text = "Please visit YesWebDesignStudio!";
>>>>>>> Stashed changes
    console.log(text. %i% ("YesWebDesignStudio", "YWDS"))
    Output: "Please visit YWDS!"
    `,
  },
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    id: 20,
    title: `ต้องการที่จะให้ค่าตอบกลับออกมาเป็น True จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง`,
    type_Quiz: "key",
    keyEdit: `const text = "Please visit YesWebDesignStudio!";
=======
=======
>>>>>>> Stashed changes
    question_id: 20,
    question: `ต้องการที่จะให้ค่าตอบกลับออกมาเป็น True จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง`,
    type_question: "key",
    sub_question: `const text = "Please visit YesWebDesignStudio!";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    if (text. %i% ("YesWebDesignStudio")) {
      return true;
    } else {
      return false;
    }
    `,
  },
];

export default QuizSample;
