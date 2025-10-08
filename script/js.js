function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function openHome(){
    window.open("./../index.html");
}

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.anim');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });
  });

const lyrics = `Chorus (repeat):<br>
Metals are shiny, strong and bright,<br>
Malleable, ductile, full of might.<br>
Good conductors, ringing sound,<br>
In reactivity series, strength is found.<br>
<br>
Verse 1 – Properties:<br>
Lustrous, hard, with melting high,<br>
Malleable sheets, wires they supply.<br>
With oxygen, oxides they form,<br>
Basic or amphoteric, that’s the norm.<br>
<br>
Verse 2 – Chemical Facts:<br>
With acids they set hydrogen free,<br>
But copper and silver too noble to be.<br>
Displacement shows who’s strong, who’s weak,<br>
Reactivity series is what we seek.<br>
<br>
Verse 3 – Extraction & Refining:<br>
Carbon reduces some ores with might,<br>
Reactive metals need electrolysis light.<br>
Impure anode, pure cathode made,<br>
Electrolyte helps in refining trade.<br>
<br>
Verse 4 – Alloys & Uses:<br>
Galvanized zinc keeps rust away,<br>
Stainless steel and bronze will stay.<br>
Copper for wires, gold to wear,<br>
Aluminium light, it flies in air.<br>
<br>
(Repeat Chorus)<br>
Metals are shiny, strong and bright,<br>
Malleable, ductile, full of might.<br>
Good conductors, ringing sound,<br>
In reactivity series, strength is found.<br>`;

function a(){
  document.getElementById("song_lyrics").innerHTML = lyrics;
}

document.addEventListener('DOMContentLoaded', function() {
  const loadButton = document.getElementById('loadIframeButton');
  const myIframe = document.getElementById('game');

  loadButton.addEventListener('click', function() {
      const iframeSrc = myIframe.getAttribute('data-src');
      if (iframeSrc) {
          myIframe.setAttribute('src', iframeSrc);
          // Optionally, hide the button after loading the iframe
          loadButton.style.display = 'none';
      }
  });
});
