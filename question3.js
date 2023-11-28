//Q3. Create a Temperature class in *avaScript that manages both Celsius and Fahrenheit temperatures with
//getters and setters for each unit, allowing for automatic conversion between the two scales. The class
//should have an initial state of 0°C and 2°F, and it should validate input values for temperature updates,
//ensuring they are numeric. When setting the temperature in either Celsius or Fahrenheit, the class should
//correctly update the corresponding value in the other scale. For example, setting the Celsius temperature to
//25°C should automatically update the Fahrenheit temperature to 77°F. Your challenge is to implement the
//Temperature class following the provided code structure and reBuirements while ensuring that it handles
//conversions and input validation accurately.


class Temperature{
     constructor(){
          this.celsius=0;
          this.fahrenheit=32;
     }

     //Getter for Celsius Temperature
     get getCelsius(){
          return this.celsius;
     }

     //Setter for Celsius temperature
     set setCelsius(celsius){
          if(typeof celsius === 'number'){
               this.celsius=celsius;
               this.fahrenheit=(celsius * 9/5) + 32;
          }else{
               console.log('Invalid input. Please provide a number for Celsius temperature.');
          }
     }


     //Getter for Fharenheit temprature
     get getFharenheit(){
          return this.fahrenheit;
     }

     //Setter for fharenheit Temprature
     set setFharenheit(fharenheit){
          if(typeof fharenheit === 'number'){
               this.fahrenheit=fharenheit;
               this.celsius=(fharenheit-32) * 5/9;
          }else{
             console.log('Invalid input. Please provide a number for Celsius temperature.');
          }
     }

}

const temperature=new Temperature();

console.log(`Initial Celsius: ${temperature.getCelsius}C°`);  //Initial Celsius: 0C°
console.log(`Initial Fharenheit: ${temperature.getFharenheit}F°`);  //Initial Fharenheit: 32F°

temperature.setCelsius=25; 
console.log(`Celsius: ${temperature.getCelsius}C°`);     //Celsius: 25C°
console.log(`Fharenheit: ${temperature.getFharenheit}F°`);   //Fharenheit: 77F°

temperature.setFharenheit=68;
console.log(`Celsius: ${temperature.getCelsius}C°`);       //Celsius: 20C°
console.log(`Fharenheit: ${temperature.getFharenheit}F°`);  //Fharenheit: 68F°





