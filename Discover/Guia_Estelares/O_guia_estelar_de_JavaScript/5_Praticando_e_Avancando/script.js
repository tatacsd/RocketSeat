// 1. Declare uma variavel de nome weight
  let weight

// 2 . Que tipo de dado é a variavel acima?
  console.log(`the type of the variable is ${typeof weight}`)
/*
    3. Declare uma variavel e atribua valores 
    para cada um dos dados:
      * name: String
      * age: int
      * stars: float
      * isSubscribed: boolean
 */
 let name = "Thays"
 let age = 29
 let stars = 4.0
 let isSubscribed = true


    /*
      4. A variavel student abaixo é de que tipo de
      que tipo de dados?
      // objeto
      4.1 Atribua a ela a mesma propriedades e valores do exercicio 3.
      4.2 Mostre no console a seguinte mensagem:
       <name> de idade <idade> pesa <weight> kg.
    */
  let student = {
    name: "Thays",
    age: 29,
    weight: 88,
  }
  console.log(`${student.name} de ${student.age} pesa ${student.weight} kg`)

  /**
    5. Declare uma variavel do tipo Array, de o nome students e atribua a ela
     nenhum valor, ou seja somente o array vazio
   */

     let students = []

  /*
    6. Reatribua valor para a variavel acima, colocando dentro ela o objeto 
    student da questao 4
  */
    students = [
      student,
    ]

  /*
    7. Coloque no  console o valor da posição zero do array acima
  */
    console.log(students[0])

  /*
    8. Crie um novo student e coloque na posical 1 do array students
  */

    const newStudent = {
      name: "Mayk",
      age: 33,
      weight: 90,
    }

    students.push(newStudent);
    console.log(students)