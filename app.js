// 1) async defer

// 3) event delegation
// https://www.w3schools.com/js/js_events.asp
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp


// preventDefault - რაც დეფაულტ ქცევაა მაგალითად <a href='fb.com'></a> რომ გავუთიშოთ.
// stopPropagation - შვილიშვილიდან რომ არ აყვეს ზემოთ მშობლამდე და ყველა ივენთს.
// https://www.w3schools.com/jsref/event_stoppropagation.asp

// stopImmediatePropagation
// თუ ერთ ელემენტზე ერთზე მეტი ივენთი გვაქვს მიბმული და მხოლოდ რომელიმე გვინდა შესრულდეს , ამით გავთიშავთ დანარჩენებს.


// ავტორიზაცია;
const authButton = document.getElementById("auth-button"); 

// აბსტრაქტული დინამიური მოდელი ჩვენი ფორმის;
const authForm = {
  username: {
    label: 'მომხმარებელი',
    type: 'text',
    validators: {
      required: {
        errorText: 'ეს ველი აუცილებელია'
      },
      minLenght: {
        value: 6,
        errorText: 'მინიმალური სიმბოლების რაოდენაბა არის 6'
      },
      maxLength: {
        value: 20,
        errorText: '20 სიმბოლოზე მეტია!'
      }

    }
  },

  password: {
    label: 'პაროლი',
    type: 'password',
    validators: {
      required: {
        errorText: 'ეს ველი აუცილებელია'
      },
      minLenght: {
        value: 8,
        errorText: 'მინიმალური სიმბოლების რაოდენაბა არის 6'
      },
      dontMach: {
        name: 'username'
      }
    }
  }
}

authButton.addEventListener('click', () => {
  // ესეც ცალკე ფუნქციაში გავიდეს. როგორც ჰედერი გავაკეთეთ..
  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.append(modal);

  // დავალაგოთ კოდი ფუნქციებში/
  const header = createHeader()
  modal.append(header);

  const title = document.createElement('div');
  title.innerText = 'ავტორიზაცია';
  title.classList.add('title');

  // ესეც ცალკე
  const close = document.createElement('div');
  close.classList.add('close')
  close.innerText = 'X';

  close.addEventListener('click', (e) => {
    modal.remove()
  })

  header.append(title, close);

  const submitButton = document.createElement('div');
  submitButton.innerText = 'დადასტურება';
  submitButton.classList.add('button')


  // ესეც ცალკე შეგვიძლია გავიტანოთ ფუნქციაში.
  for (let control in authForm) {
    const input = document.createElement('input');
    input.type = authForm[control].type;
    input.placeholder = authForm[control].label

    modal.append(input);
  }

  modal.append(submitButton);

  // საბმითიც ცალკე გავიტანოთ. 
  submitButton.addEventListener('click', () => {
    // სწორად როგორ დავითრიოთ დომინდან ინფუთები 
    const username = modal.children[1];
    const password = modal.children[2];

    console.log(username.value, password.value);
    // ვალიდაციები...
  })
})

function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header');

  return header
}