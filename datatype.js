        // this is where js code comes in
        let x = 10000; // defines x as a variable, which is equal to 10000
        const y = 20; // constant, cant be modified
        console.log(x);
        console.log("y = ", y);

        let ans = prompt("give me a number", "default num");
        console.log(2*ans);

        for(let i=0; i<=5; i++){
            console.log("i is: ", i);
        }

        function print(info){
            console.log("printing info...");
            console.log(info)
        }

        let Print = function(msg){
            console.log("PRINTING MSG..");
            console.log(msg);
        }

        function add(a, b){
            let c = a+b;
            console.log("Added a, b");
            return c;
        }

        print(ans);
        Print("YOOOOO");
        let d = add(5, 10);
        // console.log(d);

        document.write("I can write stuff!");
