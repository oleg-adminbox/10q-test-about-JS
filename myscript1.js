// 1. Задача: Реализовать игру в загадки

// Требования:
// Программа выводить в диалоговое окно текст загадки и ждет ввода пользователя
// .
// Программа после ввода пользователя ответа должна вывести результат: правильный ли ответ дал пользователь
// . 
// Загадок должно быть 10, тематика вопросов должна быть по первому и второму занятию
// . 
// Программа должна в конце игры сказать, сколько ответов дал пользователь: сколько из них было верных.

// Программа должна не учитывать регистр ответа: "JavaScript" и "javascript" оба должны быть правильным ответом на вопрос 
// "Какой язык мы учим?"

// Форма сдачи работы: нужно создать git-репозиторий на сайте https://github.com/ и скинуть ссылку на него в myStat,
// подсматривать чужие работы - можно и нужно.

// Мои комментарии к коду: в программе не использовались массивы, функции, массив for,  поскольку на момент выдачи данного задания,
//  мы "официально" их не проходили 
// !обратите внимание! для ускорения процедуры тестирования, сообщения выводятся в консоли,
// по этому, пожалуйста, откройте консоль сразу

var       questionCount, correctAnswers, notcorrectAnswers;
var         question1 = "PhpStorm это 'редактор кода' или 'среда разработки'?",
            question2 = "Какой язык мы изучаем: 'Java', 'JavaScript', 'CoffeScript' или 'VBScript'?",
            question3 = "Какой тип обработчика JavaScript: 'интерпретатор' или 'компилятор'?",
            question4 = "Можно ли прочитать исполняемый файл JS без специализированного ПО 'можно' / 'нельзя'?"
            question5 = "К какой категории языков относится JS: 'строго типизированный' или 'не строго типизированный'?",
            question6 = "Где преимущественно применяется JS: 'Frontend' или 'Backend' или 'другое'?",
            question7 = "Используется ли JS в Backend'e, 'да, используется' / 'нет, конечно' ?",
            question8 = "Как называется фреймфорк, который позволил использовать JS на стороне сервера \n: 'Ruby', 'Angular', 'Swift', 'Node.JS', 'React' ?",
            question9 = "Какой самый современный стандарт ECMAScript: 'ES6', 'ES7', 'ES2017', 'ES8', 'ES2018', 'ES9', 'ES10'?",
           question10 = "Для чего нужны фреймворки?",
              answer1 = "среда разработки", 
              answer2 = "JavaScript",
              answer3 = "интерпретатор",
              answer4 = "можно",
              answer5 = "не строго типизированный",
              answer6 = "Frontend",
              answer7 = "да, используется",
              answer8 = "Node.JS",
             answer91 = "ES2017",
             answer92 = "ES8",
             answer10 = "Для того",
        messageResult = " ",
      answerIsCorrect = "Вы ответили правильно!",
   answerIsNotCorrect = "Это не правильный ответ!";
 
   alert( "Внимание! \nВсе ответы выводятся в консоли, откройте консоль сейчас! \n\nДля наглядности варианты ответов заключены в апострофы. \nОтвет должен совпадать с предложенным вариантом,\nв ответах учитывается кол-во пробелов и знаки препинания,\nно не учитывается регистр.");

do
{
        questionCount = 1;
       correctAnswers = 0;
    notcorrectAnswers = 0;    
         
        
// 1
        // questionCount++;
        answer = prompt(question1," ");
        if( answer1.toUpperCase() == answer.toUpperCase() )
        {
            correctAnswers++;
            console.log("\n"+questionCount+" "+answerIsCorrect);
        } else {
            notcorrectAnswers++;
            console.log("\n"+questionCount+" "+answerIsNotCorrect);
        }
        

// 2    
        questionCount++;
        answer = prompt(question2," ");
        if( answer2.toUpperCase() == answer.toUpperCase() )
        {
            correctAnswers++;
            console.log(questionCount+" "+answerIsCorrect);
        } else {
            notcorrectAnswers++;
            console.log(questionCount+" "+answerIsNotCorrect);
        }
      

// 3
        questionCount++;
        answer = prompt(question3," ");
        if( answer3.toUpperCase() == answer.toUpperCase() )
        {
            correctAnswers++;
            console.log(questionCount+" "+answerIsCorrect);
        } else {
            notcorrectAnswers++;
            console.log(questionCount+" "+answerIsNotCorrect);
        }
        
// 4
        questionCount++;
        answer = prompt(question4," ");
        if( answer4.toUpperCase() == answer.toUpperCase() )
        {
            correctAnswers++;
            console.log(questionCount+" "+answerIsCorrect);
        } else {
            notcorrectAnswers++;
            console.log(questionCount+" "+answerIsNotCorrect);
        }
        
// 5
        questionCount++;
        answer = prompt(question5," ");
        if( answer5.toUpperCase() == answer.toUpperCase() )
        {
            correctAnswers++;
            console.log(questionCount+" "+answerIsCorrect);
        } else {
            notcorrectAnswers++;
            console.log(questionCount+" "+answerIsNotCorrect);
        }
        
// 6
        questionCount++;
        answer = prompt(question6," ");
        if( answer6.toUpperCase() == answer.toUpperCase() )
        {
            correctAnswers++;
            console.log(questionCount+" "+answerIsCorrect);
        } else {
            notcorrectAnswers++;
            console.log(questionCount+" "+answerIsNotCorrect);
        }
        
// 7
        questionCount++;
        answer = prompt(question7," ");
        if( answer7.toUpperCase() == answer.toUpperCase() )
        {
            correctAnswers++;
            console.log(questionCount+" "+answerIsCorrect);
        } else {
            notcorrectAnswers++;
            console.log(questionCount+" "+answerIsNotCorrect);
        }


// 8
        questionCount++;
        answer = prompt(question8," ");
        if( answer8.toUpperCase() == answer.toUpperCase() )
        {
            correctAnswers++;
            console.log(questionCount+" "+answerIsCorrect);
        } else {
            notcorrectAnswers++;
            console.log(questionCount+" "+answerIsNotCorrect);
        }

// 9
        questionCount++;
        answer = prompt(question9," ");
        if( answer91.toUpperCase() == answer.toUpperCase() || answer92.toUpperCase() == answer.toUpperCase())
        {
            correctAnswers++;
            console.log(questionCount+" "+answerIsCorrect);
        } else {
            notcorrectAnswers++;
            console.log(questionCount+" "+answerIsNotCorrect);
        }

// 10
        questionCount++;
        answer = prompt(question10," ");
        if( answer10.toUpperCase() == answer.toUpperCase() )
        {
            correctAnswers++;
            console.log(questionCount+" "+answerIsCorrect+"\n");
        } else {
            notcorrectAnswers++;
            console.log(questionCount+" "+answerIsNotCorrect+"\n");
        }
             

        switch(questionCount)
        {
            case 0: questionCount+="ль";break;
            case 1: questionCount+="н";break;
            case 2: questionCount+="ва";break;
            case 3: questionCount+="ри";break;
            case 4: questionCount+="ре";break;
            case 7:
            case 8: questionCount+="мь";break;
            default: questionCount+="ть";break;
        }

        alert("Вы ответили на "+questionCount+" вопросов по теме JavaScript, из них правильных ответов было: "+correctAnswers+" соотвественно вы ошиблись "+notcorrectAnswers+" раз")
    

}while(confirm("Пройдем тест еще раз?"));