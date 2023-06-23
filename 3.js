// Write a “person” class to hold all the details.  DONE


class person {
    constructor (name, age, address, phoneNumber, email) {
          this.name = name;
          this.age = age;
          this.address = address;
          this.phoneNumber = phoneNumber;
          this.email = email
    }
    getAge () {
        return this.name;
    }
    getAge () {
        return this.age;
    }
    getAddress () {
        return this.address;
    }
    getPhoneNumber () {
        return this.phoneNumber
    }
    getEmail () {
        return this.email
    }

    setName (name) {
        this.name = name;
    }
    setAge (age) {
        this.age = age;
    }
    setAddress (address) {
        this.address = address;
    }
    setPhoneNumber (phoneNumber) {
        this.phoneNumber = this.phoneNumber;
    }
    setEmail (email) {
        this.email = email;
    }
}

let person1 = new person ('rafik', 28, 'gobalapuram', '8148092033', 'bmrafik786@gmail.com')


person1.Name = 'mohamed'
console.log(person1.Name);
