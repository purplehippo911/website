// Where I got the greetings from
      // https://www.babbel.com/en/magazine/how-to-say-hello-in-10-different-languages
      const translation = document.querySelector(".text > .title");
      const divFlag = document.querySelector(".text span");
      const submitBtn = document.querySelector(".hero .btn");
      let lastGreeting;

      const greetings = [
        { text: "Hi", flag: "🇬🇧 " }, // english
        { text: " Hei", flag: "🇳🇴 " }, // norsk
        { text: "Bonjour", flag: "🇫🇷 " }, // french
        { text: "Hola", flag: "🇪🇸 " }, // spanish
        { text: "Privet", flag: "🇷🇺 " }, // russian
        { text: " Ni hao", flag: "🇨🇳 " }, // chinese
        { text: " Ciao", flag: "🇮🇹 " }, // italian
        { text: " Konnichiwa", flag: "🇯🇵 " }, // japanese
        { text: "Guten Tag", flag: "🇩🇪 " }, // german
        { text: " Olá", flag: "🇵🇹 " }, // portuguese
        { text: " Anyong haseyo ", flag: "🇰🇷 " }, // korean
        { text: " Assalamu alaykum", flag: "🇪🇬 " }, // arabic
        { text: " Hej", flag: "🇩🇰 " }, // danish
        { text: "Shikamoo", flag: "🇰🇪 " }, // swahili
        { text: " Hoi", flag: "🇳🇱 " }, // dutch
        { text: " Yassas", flag: "🇬🇷 " }, // greek
        { text: " Witaj", flag: "🇵🇱 " }, // polish
        { text: "Selamat siang ", flag: "🇮🇩 " }, // indonesian
        { text: " Namaste", flag: "🇮🇳 " }, // hindi
        { text: " Merhaba", flag: "🇹🇷 " }, // turkish
        { text: " Shalom", flag: "🇮🇱 " }, // hebrew
        { text: " Hej", flag: "🇸🇪 " }, // swedish
        { text: " Akaam jirtani", flag: "🇪🇹 " }, // oromo
      ];

      function getTranslation() {
        const random = Math.floor(Math.random() * greetings.length);
        const greeting = greetings[random];
        translation.textContent = greeting.text;
        // to avoid the same greeting reaparing twice in a row
        if (greeting === lastGreeting) {
          return getTranslation();
        }
        lastGreeting = greeting;
        // the flags should attach to the right greeting
        const flag = greeting.flag;
        divFlag.innerHTML = flag;

        console.table(greetings);
        console.log(greeting, random);

        document.querySelector(".number").textContent = `#${random}`;
      }

      window.addEventListener("load", getTranslation);
      submitBtn.addEventListener("click", getTranslation);