/*fetch('js/events.json')

  .then(res => {
    if (!res.ok) throw new Error('Failed to load events.json');
    return res.json();
  })
  .then(eventsData => {
    const carousel = document.getElementById('carouselContent');
    const indicators = document.getElementById('carouselIndicators');
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));

    console.assert(Array.isArray(eventsData), 'eventsData must be array');
    console.assert(eventsData.length > 0, 'eventsData should not be empty');

    eventsData.forEach((event, index) => {
      /* Indicator 
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.dataset.bsTarget = '#eventsCarousel';
      indicator.dataset.bsSlideTo = index;
      indicator.className = index === 0 ? 'active' : '';
      indicators.appendChild(indicator);

      /* Slide 
      const slide = document.createElement('div');
      slide.className = 'carousel-item' + (index === 0 ? ' active' : '');

      slide.innerHTML = `
        <div class="event-card">
          <div class="row  gx-0">           
            <div class="col-md-6">
              <h3 class="text-middle fw-bold">${event.eventName}</h3>
              <p class=" justify-content-center mb-3">${event.date}</p>
               <p class=" text-dark">${event.description}</p>              
            </div>
             <div class="col-md-4 text-center">
              <div class="speaker-card">
                <img src="${event.speaker.image}" class="speaker-img mb-2">
                <h6 class="fw-bold">${event.speaker.name}</h6>
                <p class="small mb-0">${event.speaker.designation}</p>
                <p class="small text-muted">${event.speaker.company}</p>
              </div>
            </div>
         

          <div class="row  justify-content-center">
         
            ${event.sessions.map(s => `
              <div style="width:20%">
                <div class="day-card"      data-img="${s.image}"      data-title="${s.day ? `${s.day} - ${s.topic}` : s.topic}">

                  <img src="${s.image}" class="day-img">
                 ${s.day ? `<span class="badge bg-primary">${s.day}</span>` : ''}
                  <p class="small fw-semibold mt-1">${s.topic}</p>
                </div>
              </div>`).join('')}
          </div>
        </div> </div>`;

      carousel.appendChild(slide);
    });

    /* Modal handler
    document.addEventListener('click', e => {
      const card = e.target.closest('.day-card');
      if (!card) return;
      document.getElementById('modalImage').src = card.dataset.img;
      document.getElementById('modalTitle').innerText = card.dataset.title;
      modal.show();
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById('carouselContent').innerHTML =
      '<p class="text-danger text-center">Error loading events data</p>';
  });
*/
 const eventsImages = [
      [
        "https://via.placeholder.com/800x600/667eea/fff?text=Event+1+Day+1",
        "https://via.placeholder.com/800x600/764ba2/fff?text=Event+1+Day+2",
        "./images/events/2025-26/LLM1.jpeg",
        "https://via.placeholder.com/800x600/764ba2/fff?text=Event+1+Day+4",
        "https://via.placeholder.com/800x600/667eea/fff?text=Event+1+Day+5"
      ],
      [
        "../images/events/2025-26/GenAI1.jpeg",
        "../images/events/2025-26/GenAI2.jpeg",
        "../images/events/2025-26/GenAI3.jpeg",
        "../images/events/2025-26/GenAI4.jpeg",
        "../images/events/2025-26/GenAI5.jpeg"
      ],
      [
        "https://via.placeholder.com/800x600/00f2fe/fff?text=Event+3+Day+1",
        "https://via.placeholder.com/800x600/43e97b/fff?text=Event+3+Day+2",
        "https://via.placeholder.com/800x600/00f2fe/fff?text=Event+3+Day+3",
        "https://via.placeholder.com/800x600/43e97b/fff?text=Event+3+Day+4"
      ]
    ];

    let currentEvent = 0;
    let currentIndex = 0;
    let autoTimer;

    function openModal(eventIndex, imgIndex) {
      currentEvent = eventIndex;
      currentIndex = imgIndex;
      showImage();
      new bootstrap.Modal(document.getElementById("imageModal")).show();
      autoTimer = setInterval(nextImage, 3000);
    }

    function showImage() {
      document.getElementById("modalImg").src = eventsImages[currentEvent][currentIndex];
      //document.getElementById("modalTitle").innerText = `Event ${currentEvent + 1} – Day ${currentIndex + 1}`;
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % eventsImages[currentEvent].length;
      showImage();
    }

    document.getElementById("imageModal").addEventListener("hidden.bs.modal", () => {
      clearInterval(autoTimer);
    });