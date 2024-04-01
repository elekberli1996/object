// 1 object yaradin
// let student={
//     name:"emin",
//     surname:"elekberli",
//     age:28,
//     grade:100,
//     group:"coder Naxcivan"
// }
// console.log(student);

// *********************
// 2 array icerisinde coxlu obyektler
// let students=[
//     {
//         id:1,
//         name:"emin",
//         surname:"elekberli",
//         age:28,
//         grade:100,
//         group_id:1
    
//     },
//     {
//         id:2,
//         name:"kenan",
//         surname:"agayev",
//         age:26,
//         grade:98,
//         group_id:1
    
//     },
//     {
//         id:3,
//         name:"esger",
//         surname:"aliyev",
//         age:28,
//         grade:85,
//         group_id:2
    
//     },
//     {
//         id:4,
//         name:"emin",
//         surname:"gulmemmedli",
//         age:28,
//         grade:80,
//         group_id:3
    
//     },
//     {
//         id:5,
//         name:"rauf",
//         surname:"Hesenov",
//         age:28,
//         grade:100,
//         group_id:3
    
//     }
// ];
// let groups=[
//     {
//         id:1,
//         group_name:"coder_naxcivan"
//     },
//     {
//         id:2,
//         group_name:"coder_caravan"
//     },
//     {
//         id:3,
//         group_name:"coder_quba"
//     }

// ]
// let newStudents=[]

// students.map(student=>{
//     group=groups.find(g=>g.id===student.group_id) 
//     console.log(student.name+"  "+student.surname+" " + group.group_name)

// });

// **********************

//3  object icersinde array 
// let students=[
//         {
//             id:1,
//             name:"emin",
//             surname:"elekberli",
//             age:28,
//             grade:100,
//             hobbies:["sahmat","football", "basketball"],
//             group_id:1
        
//         },
//         {
//             id:2,
//             name:"kenan",
//             surname:"agayev",
//             age:26,
//             grade:98,
//             hobbies:["coding","football", "tennis"],
//             group_id:1
        
//         },
//         {
//             id:3,
//             name:"esger",
//             surname:"aliyev",
//             age:28,
//             grade:85,
//             hobbies:["sahmat","football", "reading"],
//             group_id:2
        
//         },
//         {
//             id:4,
//             name:"emin",
//             surname:"gulmemmedli",
//             age:28,
//             grade:80,
//             hobbies:["sahmat","football", "basketball"],
//             group_id:3
        
//         },
//         {
//             id:5,
//             name:"rauf",
//             surname:"Hesenov",
//             age:28,
//             grade:100,
//             hobbies:["sahmat","football", "basketball"],
//             group_id:3
        
//         }
//     ];

//     console.log(students)

// ***********************************

// // 4 array cersinde qiymet ortalamsin tapin
// let students=[
//             {
//                 id:1,
//                 name:"emin",
//                 surname:"elekberli",
//                 age:28,
//                 grade:100,
//                 hobbies:["sahmat","football", "basketball"],
//                 group_id:1
            
//             },
//             {
//                 id:2,
//                 name:"kenan",
//                 surname:"agayev",
//                 age:26,
//                 grade:98,
//                 hobbies:["coding","football", "tennis"],
//                 group_id:1
            
//             },
//             {
//                 id:3,
//                 name:"esger",
//                 surname:"aliyev",
//                 age:28,
//                 grade:85,
//                 hobbies:["sahmat","football", "reading"],
//                 group_id:2
            
//             },
//             {
//                 id:4,
//                 name:"emin",
//                 surname:"gulmemmedli",
//                 age:28,
//                 grade:80,
//                 hobbies:["sahmat","football", "basketball"],
//                 group_id:3
            
//             },
//             {
//                 id:5,
//                 name:"rauf",
//                 surname:"Hesenov",
//                 age:28,
//                 grade:100,
//                 hobbies:["sahmat","football", "basketball"],
//                 group_id:3
            
//             }
//         ];

// let grade_aveage;
// let grades=0;
// students.map(student=>{

//     grades+=student.grade;
// })
// grade_aveage=grades/students.length;
// console.log(grade_aveage);

// /// 5 qiymeti 90dan asaqi olan telebeleri cixart

// let array=[];
// let filters_student=students.filter(student=>student.grade<90)
// console.log(filters_student);
// filters_student.map(s=>{
//     array.push(`${s.name} ${s.surname} notunuz ${s.grade}`)
    
// })
// alert(array+". notunuz 90dan asaqidir")




