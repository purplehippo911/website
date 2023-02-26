import { useEffect, useState } from "react";

const Welcome = () => {
    // Where I got the greetings from
      // https://www.babbel.com/en/magazine/how-to-say-hello-in-10-different-languages
      const [translation, setTranslation] = useState('');
      const [id, setId] = useState(null);
      const [flag, setFlag] = useState('');
      const submitBtn = document.querySelector(".greeting__btn");
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
        { text: " Zdrasti ", flag: " 🇧🇬 " }, // bulgarian
        { text: " Hug ", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿  " }, // scottish gaelic
        { text: " Halló ", flag: "🇮🇸  " }, // icelandic
        { text: " Suosdei ", flag: "🇰🇭 " }, // cambodian khmer
        { text: " Bună ziua ", flag: "🇷🇴 " }, // romanian
        { text: " La ora na ", flag: "🇵🇫  " }, // tahitian / french polynesian
        { text: " Chào ", flag: "🇻🇳 " }, // vietnamise
        { text: " Moi  ", flag: "🇫🇮  " }, // finnish
        { text: " Helo ", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿  " }, // Welsh
        { text: " Selamat pagi ", flag: "🇲🇾 " }, // malaysian
        { text: " Sawubona ", flag: "🇿🇦  " }, // Zulu
      ];

      function getTranslation() {
          const random = Math.floor(Math.random() * greetings.length);
          const greeting = greetings[random];
          setTranslation(greeting.text);
          // to avoid the same greeting reaparing twice in a row
          if (greeting === lastGreeting) {
            return getTranslation();
          }
          lastGreeting = greeting;
          // the flags should attach to the right greeting
          const flag = greeting.flag;
          setFlag(flag);
  
          setId(random);
        }

    useEffect(() => {
        getTranslation();
    })

    return ( 
        <section class="greeting-section">
            <div class="container container-main grid">
                <div class="text">
                <h2 class="title"> {translation} </h2>
                <a href="#" class="flags">
                    <strong class="flag">{flag} </strong>
                </a>
                <p class="number">{id}</p>
                </div>
                <button class="greeting__btn" onClick={getTranslation}>Click Me</button>
            </div>
       </section>
     );
}
 
export default Welcome;