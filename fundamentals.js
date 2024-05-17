 // var students = {
      //   name: "Priyaa d",
      //   age: 20,
      // };
      // var name= "me";

    //   reassignment
      // name='abi'; 
      // console.log(students.name + " is " + students.age + " years old");
      // console.log(name);
      // function fullname(firstname, lastname){
      //   return "welcome ${lastname} , ${firstname}" ;
      // }
      // console.log(fullname("priya "," A"));


      // //   Task
      // function movieUrl(domain, genre, year) {
      //   return `http://${domain},?genere=${genre},&year=${year}`
      // }
      // console.log(movieUrl("imdb.com", "thriller", 2020));

      // // Unpacking
      // const[,t1,t2,t3=80]=[100,200,null];  // 200,null,80
      // console.log(t1,t2,t3);

      // const[y1,y2,y3] = [300,400,400,500,300,350,349]
      // console.log(y1,y2,y3);

      // const [z1,z2,...z3]=[300,400,400,500,300,350,349]
      
// spread operaor
      // marks1=[70,80,60];
      // marks2=[... marks1];   // copy of marks1
      // marks3=[100,60, ...marks1,75,80]
      // console.log(marks2);
      // consoloe.log(marsk3);

// // combining 2 lists
//       let t11=[80,90];
//       let t12=[50,60];
//       t13=[...t11, ...t12]
//       console.log(t13)
      
   //  math operations   
        // console.log(Math.max(4,5,64,34));  // sending math.max as numbers


        // let heights = [120,140,190,80,170];
        // console.log(Math.max(heights));

        // // console.log(Math.max(heights));  //Nan // were sending array(obj) in heights
        // // console.max(heights[0],heights[1],heights[2],[3],heights[4]); // we cant do like this
        // console.log(Math.max(...heights)); // so use spread op

        function own_max(...nums){
            return nums;
          }
          console.log(own_max(5,6,10));
          console.log(own_max(5,6,7,8,9,9,10));
          