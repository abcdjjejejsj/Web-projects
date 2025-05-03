const quizData = [
    {
      question: "What is the correct way to create a thread in Java?",
      options: [
        "Implementing the Runnable interface",
        "Extending the Thread class",
        "Both A and B",
        "None of the above"
      ],
      correctAnswer: "Both A and B"
    },
    {
      question: "Which method starts a thread in Java?",
      options: ["start()", "run()", "execute()", "init()"],
      correctAnswer: "start()"
    },
    {
      question: "Which layout arranges components in a row-based order?",
      options: ["GridLayout", "FlowLayout", "BorderLayout", "CardLayout"],
      correctAnswer: "FlowLayout"
    },
    {
      question: "What does the setSize (400, 300); method do in a JFrame?",
      options: [
        "Sets the width to 300 and height to 400",
        "Sets the width to 400 and height to 300",
        "Sets the size to 400x300 regardless of order",
        "It's an invalid method"
      ],
      correctAnswer: "Sets the width to 400 and height to 300"
    },
    {
      question: "Which Swing component is best suited for displaying a drop-down list of selectable options?",
      options: ["JButton", "JComboBox", "JTextField", "JPanel"],
      correctAnswer: "JComboBox"
    },
    {
      question:
        "The container displays a number of components in a column, with extra space going between the first two components. Which layout manager(s) most naturally suited for the described layout?",
      options: ["BoxLayout", "FlowLayout", "BorderLayout", "GridLayout"],
      correctAnswer: "BoxLayout"
    },
    {
      question: "What is the correct way to declare an array in Java?",
      options: ["int arr = new int(5);", "int[] arr = new int[5];", "array arr = new int[5];", "int arr[] = new int();"],
      correctAnswer: "int[] arr = new int[5];"
    },
    {
      question: 'What will be printed by the following code? <img src="images/q8_code.png" alt="Java charAt code">',
      options: ["J", "a", "v", "A"],
      correctAnswer: "a"
    },
    {
      question: 'What is printed when this code runs? <img src="images/q9_code.png" alt="Try-Finally block code">',
      options: ['Only "Try block"', 'Only "Finally block"', '"Try block" followed by "Finally block"', "Compilation error"],
      correctAnswer: '"Try block" followed by "Finally block"'
    },
    {
      question: "Which Java GUI framework is lightweight?",
      options: ["AWT", "Swing", "Both A and B", "None"],
      correctAnswer: "Swing"
    },
    {
      question: "What is the full form of JDBC?",
      options: [
        "Java Database Connectivity",
        "Java Data Code",
        "Java Data Communication",
        "Java Development Connectivity"
      ],
      correctAnswer: "Java Database Connectivity"
    },
    {
      question:
        'Fill in the missing code to establish a connection to a MySQL database. <img src="images/q2_as11_code.png" alt="JDBC Connection code"> What should replace // INSERT CODE HERE?',
      options: [
        'DriverManager.connect("mysql:localhost:mydb", "user", "password");',
        'DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");',
        'Connection.get("jdbc:mysql://localhost:3306/mydb", "user", "password");',
        'DriverManager.newConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");'
      ],
      correctAnswer:
        'DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");'
    },
    {
      question: "Which interface is used to retrieve data from a database in JDBC?",
      options: ["ResultSet", "Statement", "Connection", "PreparedStatement"],
      correctAnswer: "ResultSet"
    },
    {
      question:
        'What is the purpose of the following JDBC code? <img src="images/q4_as11_code.png" alt="JDBC Select code">',
      options: [
        'Connects to a MySQL database, retrieves data from the "employees" table, and prints it',
        'Inserts data into the "employees" table of a MySQL database',
        'Deletes data from the "employees" table of a MySQL database',
        'Updates data in the "employees" table of a MySQL database'
      ],
      correctAnswer:
        'Connects to a MySQL database, retrieves data from the "employees" table, and prints it'
    },
    {
      question: "Which method executes a SQL statement that may return multiple results?",
      options: ["executeQuery()", "executeUpdate()", "execute()", "executeBatch()"],
      correctAnswer: "execute()"
    },
    {
      question: "Which of the following statements is true about PreparedStatement in JDBC?",
      options: ["It is a subclass of Statement.", "It is used for executing static SQL queries.", "It can prevent SQL injection attacks.", "It is faster than Statement for single query execution."],
      correctAnswer: "It can prevent SQL injection attacks."
    },
    {
      question: "How do you establish a connection to a database using JDBC?",
      options: ["By creating an instance of the Connection interface", "By using the DriverManager.getConnection() method", "By implementing the Connection interface", "By extending the Connection class"],
      correctAnswer: "By using the DriverManager.getConnection() method"
    },
    {
      question: "Which method executes a simple query and returns a single Result Set object?",
      options: ["executeQuery()", "executeUpdate()", "execute()", "run()"],
      correctAnswer: "executeQuery()"
    },
    {
      question: "Which package in Java contains the classes and interfaces for JDBC?",
      options: ["java.sql", "java.io", "java.db", "java.net"],
      correctAnswer: "java.sql"
    },
    {
      question: "What does the Connection interface represent in JDBC?",
      options: ["A SQL query.", "A connection to a database.", "A table in a database.", "A row of data."],
      correctAnswer: "A connection to a database."
    },
    {
      question: "Which Swing component is used to create a button?",
      options: ["JLabel", "JButton", "JTextField", "JPanel"],
      correctAnswer: "JButton"
    },
    {
      question: "What does a toggle button in Java do?",
      options: [
        "It switches between two states, like on/off or enabled/disabled.",
        "It only changes the color of the button when clicked.",
        "It displays text inside the button.",
        "It opens a new window when clicked."
      ],
      correctAnswer:
        "It switches between two states, like on/off or enabled/disabled."
    },
    {
      question:
        "What is the primary purpose of SQL(Structured Query Language) in Java application?",
      options: [
        "To create and manage user interfaces",
        "To interact with databases for data retrieval and manipulation",
        "To perform system-level operation like file management",
        "To handle network communication"
      ],
      correctAnswer: "To interact with databases for data retrieval and manipulation"
    },
    {
      question: "Which of the following is NOT a valid event type in Java Swing?",
      options: ["ActionEvent", "MouseEvent", "KeyEvent", "WindowEvent"],
      correctAnswer: "WindowEvent"
    },
    {
      question: "Which method is used to set the text of a JLabel component?",
      options: ["setText()", "setLabel()", "changeText()", "displayText()"],
      correctAnswer: "setText()"
    },
    {
      question:
        "Which layout manager arranges components in a grid of rows and columns?",
      options: ["FlowLayout", "BorderLayout", "GridLayout", "CardLayout"],
      correctAnswer: "GridLayout"
    },
    
    {
      question: "Which of the following is true about the JLabel component in Java Swing?",
      options: [
        "It is used only for displaying text.",
        "It can display text and icons.",
        "It cannot be added to a JPanel.",
        "It generates mouse events by default."
      ],
      correctAnswer: "It can display text and icons."
    },
    {
      question: "Which method is used to add an item to a JComboBox?",
      options: ["add()", "addItem()", "insertItem()", "appendItem()"],
      correctAnswer: "addItem()"
    },
    
    {
      question:
        "The container displays a number of components in a column, with extra space going between the first two components. Which of the following layout manager(s) most naturally suited for the described layout?",
      options: ["BoxLayout", "FlowLayout", "BorderLayout", "GridLayout"],
      correctAnswer: "BoxLayout"
    },
    {
      question:
        "Which of the following is TRUE regarding check box and radio button?",
      options: [
        "Check box is used for single selection item whereas radio button is used for multiple selection.",
        "Check box is used for multiple selection items whereas radio button is used for single selection.",
        "Both are used for multiple as well as single item selection.",
        "Checkbox is always preferred than radio buttons."
      ],
      correctAnswer:
        "Check box is used for multiple selection items whereas radio button is used for single selection."
    },
    {
      question:
        "Which of the following is the latest graphics and media package for Java?",
      options: ["Applet", "AWT", "Swing", "JavaFX"],
      correctAnswer: "JavaFX"
    },
    {
      question: "Which of the following is true about Layout Managers?",
      options: [
        "Layout Managers are not necessary for GUI design.",
        "Layout Managers are used to arrange components in a specific layout within a container.",
        "Layout Managers are only used for simple layouts.",
        "Layout Managers cannot be customized."
      ],
      correctAnswer:
        "Layout Managers are used to arrange components in a specific layout within a container."
    },
    {
      question: "Which of the following is NOT a method of the Graphics class?",
      options: ["drawLine()", "drawCircle()", "drawRect()", "drawString()"],
      correctAnswer: "drawCircle()"
    },
    {
      question: "What does AWT stand for?",
      options: [
        "Abstract Windowing Toolkit",
        "Advanced Windowing Tools",
        "Application Windowing Toolkit",
        "Abstract Widget Toolkit"
      ],
      correctAnswer: "Abstract Windowing Toolkit"
    },
    {
      question:
        "There is a Frame with two Labels and two TextFields. Which layout manager is likely being used by default?",
      options: [
        "FlowLayout",
        "BorderLayout",
        "GridLayout",
        "CardLayout"
      ],
      correctAnswer: "BorderLayout"
    },
    {
      question: "Which of the following is TRUE about check box in Java?",
      options: [
        'A check box can\'t be in either an "on" (true) or "off" (false) state.',
        'Clicking on a check box changes its state from "on" to "off," or from "off" to "on."',
        'A check box can be in an "on" (true) and in "off" (false) state simultaneously.',
        "Check boxes cannot be grouped together."
      ],
      correctAnswer:
        'Clicking on a check box changes its state from "on" to "off," or from "off" to "on."'
    },
    {
      question: 'What will be the output of the following Java program? <img src="images/q1_as7_code.png" alt="ReadFile code"> Assume NPTEL.txt contains: This is Programming in Java online course.',
      options: [
        "Hello, World!",
        "This is Programming in Java online course.",
        "IOException",
        "null"
      ],
      correctAnswer: "This is Programming in Java online course."
    },
    {
      question:
        "Which of these classes is used to write primitive data types to an output stream in Java?",
      options: [
        "FileWriter",
        "DataOutputStream",
        "PrintWriter",
        "BufferedOutputStream"
      ],
      correctAnswer: "DataOutputStream"
    },
    {
      question:
        "Which class is used to read character streams from a file in Java?",
      options: ["FileReader", "FileInputStream", "BufferedReader", "InputStreamReader"],
      correctAnswer: "FileReader"
    },
    {
      question:
        "What is the purpose of the flush() method in Java I/O streams?",
      options: [
        "To close the stream",
        "To write data to the stream",
        "To clear the buffer and write any buffered data to the destination",
        "To read data from the stream"
      ],
      correctAnswer:
        "To clear the buffer and write any buffered data to the destination"
    },
    {
      question:
        "Which of the following statements about the 'this' keyword in Java is true?",
      options: [
        "It is used to access static variables of the class.",
        "It is used to call a superclass constructor.",
        "It is a reference to the current object.",
        "It is used to define constants."
      ],
      correctAnswer: "It is a reference to the current object."
    },
    
   
    {
      question:
        "Which of the following statements is true about method overriding in Java?",
      options: [
        "It occurs when a subclass defines a method with the same name and parameters as a method in its superclass.",
        "It occurs when a subclass defines a method with the same name but different parameters than a method in its superclass.",
        "It is used to access private methods of the superclass.",
        "It is not allowed in Java."
      ],
      correctAnswer:
        "It occurs when a subclass defines a method with the same name and parameters as a method in its superclass."
    },
    
  
];

const titleElement = document.getElementById('title');
const quizElement = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultsElement = document.getElementById('results');

let currentQuestion = 0;
let score = 0;
let answered = false;
let startTime;
let timerInterval;

function formatTime(milliseconds) {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    startTime = Date.now();
    const timerElement = document.getElementById('timer');
    timerInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        timerElement.textContent = `Time: ${formatTime(elapsedTime)}`;
    }, 1000);
}


function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerHTML = `${currentQuestion + 1}. ${currentQuizData.question}`;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const li = document.createElement("li");
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = option;
        input.id = `answer${index}`;
        label.innerHTML = option;
        label.setAttribute("for", `answer${index}`);
        li.appendChild(input);
        li.appendChild(label);
        optionsElement.appendChild(li);

        //  Highlight answer on click
        label.addEventListener('click', () => {
            deselectAnswers(); //  Ensure only one is "active"
            label.classList.add('active');
            input.checked = true; //  Make sure the radio button is checked
        });
    });
    answered = false;
}

function deselectAnswers() {
    document.querySelectorAll('.options label').forEach(label => label.classList.remove('active', 'correct', 'wrong'));
}

function getSelectedAnswer() {
    let answer;
    document.querySelectorAll('input[name="answer"]').forEach(input => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelectedAnswer();
    if (answer) {
        const labels = document.querySelectorAll('.options label');
        const correct = quizData[currentQuestion].correctAnswer;

        labels.forEach(label => {
            if (label.textContent === correct) {
                label.classList.add('correct');
            } else if (label.textContent === answer) {
                label.classList.add('wrong');
            }
            label.classList.add('disabled'); //  Disable further clicks
        });

        let message = answer === correct ? "Correct!" : `Wrong. Correct answer is: ${correct}`;
        questionElement.innerHTML += `<p class="${answer === correct ? 'correct-text' : 'wrong-text'}">${message}</p>`;

        if (answer === correct) {
            score++;
        }

        answered = true;
        submitButton.style.display = 'none'; //  Hide submit button

        if (currentQuestion < quizData.length - 1) {
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Next Question';
            nextButton.classList.add('next-btn');
            quizElement.appendChild(nextButton);
            nextButton.addEventListener('click', () => {
                currentQuestion++;
                loadQuiz();
                submitButton.style.display = 'block'; //  Show submit button again
                nextButton.remove();
            });


        } else {
            clearInterval(timerInterval);
            const elapsedTime = Date.now() - startTime;
            quizElement.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <p>Time taken: ${formatTime(elapsedTime)}</p>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    } else {
        alert("Please select an answer!");
    }
});

loadQuiz();
startTimer();
