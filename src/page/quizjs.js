const QuizSample = [
  {
    question_id: 1,
    question: "ฟังก์ชั่นคำนวณหาพื้นที่ (กว้าง * สูง ) จงเติมคำในช่องว่าง",
    type_question: "key",
    sub_question: `function getArea( width , height ){  
      return Number( %i% ) * Number( %i1% ) ; `,
  },
  {
    question_id: 2,
    question: "สำหรับการประกาศตัวแปรใน JavaScript คำสั่งใดที่ถูกต้อง?",
    type_question: "select",
    choice: [
      "var x = 5;",
      "let x = 5;",
      "const x = 5;",
      "all of the above(ทั้งหมดข้างต้น)",
    ],
  },
  {
    question_id: 3,
    question: "ฟังก์ชั่นคำนวณหาพื้นที่วงกลม (PI * r ** 2) จงเติมคำในช่องว่าง",
    type_question: "key",
    sub_question: `function calculateCircleArea(radius){
       return %i% .PI *  %i1%  ** %i2%   ;  
      }`,
  },
  {
    question_id: 4,
    question: (
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
    type_question: "select",
    choice: ["15", "510", '"510"', "Error"],
  },
  {
    question_id: 5,
    question: "ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_question: "key",
    sub_question: `const fruits = ["apple", "orange", "papaya"] ; 
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
    question_id: 6,
    question:
      "ใน JavaScript, คำสั่งใดที่ใช้ในการกำหนดเงื่อนไขเพื่อทำงานแบบเลือก (conditional)?",
    type_question: "select",
    choice: ["for", "while", "if", "switch"],
  },
  {
    question_id: 7,
    question:
      "จงประกาศประเภทของตัวแปรต่อไปนี้ และ ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_question: "key",
    sub_question: `
    %i%  date = new Date() ;
           date = "today" ;
    %i1% text = "Hello World!" ;
           var text = "Hi!" ;

    console.log(text) ;
  %i2% 
    `,
  },
  {
    question_id: 8,
    question:
      "คำสั่งใดที่ใช้ในการเขียนข้อความลงในคอนโซล (console) ใน JavaScript?",
    type_question: "select",
    choice: ["print()", "log()", "write()", "display()", "log"],
  },
  {
    question_id: 9,
    question: "ผลลัพธ์จากการ log จะได้เป็นอย่างไร",
    type_question: "key",
    sub_question: `const primeNumbers = [2, 3, 5, 7, 11] ;
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
    question_id: 10,
    question:
      "ใน JavaScript, การใช้งานโครงสร้างข้อมูลแบบ Array สามารถทำได้โดยใช้คำสั่งใด?",
    type_question: "select",
    choice: ["newSet()", "newMap()", "newArray()", "new Array()"],
  },
  {
    question_id: 11,
    question:
      "สำหรับฟังก์ชันใน JavaScript, คำสั่งใดที่ใช้ในการส่งค่ากลับ (return value) จากฟังก์ชัน?",
    type_question: "select",
    choice: ["yield", "send", "return", "callback"],
  },
  {
    question_id: 12,
    question: "div01 และ div02 จะมีค่าข้างในเป็นอะไรบ้าง",
    type_question: "key",
    sub_question: `<divquestion_id="name" class="div01"> %i% </divquestion_id=>;
    <divquestion_id="sur_name" class="div02"> %i1% </divquestion_id=>;
    
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
    question_id: 13,
    question: "จงเติมคำในช่องว่างให้ถูกต้อง",
    type_question: "key",
    sub_question: `const favoriteColor = "red";
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
    question_id: 14,
    question: `จาก Loop ข้างต้นต้องการที่จะแสดงผลเป็นตัวเลขตั้งแต่ 0-9 จงเติมคำตอบลงในช่องว่างให้ถูกต้อง`,
    type_question: "key",
    sub_question: `for (let i = %i% ; i < 10; %i1% ;) {
      console.log(i);
    }
     `,
  },
  {
    question_id: 15,
    question: `ต้องการที่จะลบค่าตัวสุดท้ายจาก answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `
    const answers = ["yes", "no", "error"];
      answers. %i% ;
    
     `,
  },
  {
    question_id: 16,
    question: `ต้องการที่จะลบค่าตัวแรกจาก answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `
    const answers = ["yes", "no", "error"];
      answers. %i% ;
    
     `,
  },
  {
    question_id: 17,
    question: `ต้องการที่จะเพิ่มค่าต่อจากตัวสุดท้ายโดยให้ค่าเป็น newAnswer เข้าไปใน answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `
const answers = ["yes", "no", "error"];
const newAnswer = "undefined";
answers. %i% ( %i1% );
     `,
  },
  {
    question_id: 18,
    question: `ต้องการที่จะเปลี่ยนค่า “no” ให้ค่าเป็นตัวแปร newAnswer ใน answers จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง`,
    type_question: "key",
    sub_question: `const answers = ["yes", "no", "error"];
    const newAnswer = "undefined";
    answers %i% = %i1% ;
    `,
  },
  {
    question_id: 19,
    question: `ต้องการที่จะเปลี่ยนคำว่า “YesWebDesignStudio” ให้เป็น “YWDS” จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง
    `,
    type_question: "key",
    sub_question: `let text = "Please visit YesWebDesignStudio!";
    console.log(text. %i% ("YesWebDesignStudio", "YWDS"))
    Output: "Please visit YWDS!"
    `,
  },
  {
    question_id: 20,
    question: `ต้องการที่จะให้ค่าตอบกลับออกมาเป็น True จงเติมคำในช่องว่างเพื่อให้การทำงานถูกต้อง`,
    type_question: "key",
    sub_question: `const text = "Please visit YesWebDesignStudio!";
    if (text. %i% ("YesWebDesignStudio")) {
      return true;
    } else {
      return false;
    }
    `,
  },
];

export default QuizSample;
