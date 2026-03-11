// Main application logic
function loadEvents(data) {
    const container = document.getElementById('carouselContainer');
    
    if (!data || !data.events || data.events.length === 0) {
        container.innerHTML = '<div class="error">No events data available</div>';
        return;
    }

    let carouselHTML = `
        <div id="eventsCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                ${data.events.map((_, i) => `
                    <button type="button" data-bs-target="#eventsCarousel" data-bs-slide-to="${i}" ${i === 0 ? 'class="active"' : ''}></button>
                `).join('')}
            </div>
            <div class="carousel-inner">
    `;

    data.events.forEach((event, index) => {
        carouselHTML += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="event-card">
                    <div class="event-header">
                        <h2 class="event-name">${event.name}</h2>
                        <p class="event-date">${event.date}</p>
                    </div>
                    <div class="speaker-section">
                        <h3 class="speaker-title">Featured Speakers</h3>
                        ${event.speakers.map(speaker => `
                            <div class="speaker-card">
                                <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image">
                                <div class="speaker-info">
                                    <h5>${speaker.name}</h5>
                                    <p>${speaker.designation} | ${speaker.company}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="row">
                        ${event.days.map(day => `
                            <div class="col-md-4 col-sm-6 mb-3">
                                <div class="day-card">
                                    <img src="${day.image}" alt="Day Image" class="day-image">
                                    <p class="day-topic">${day.topic}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    carouselHTML += `
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#eventsCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#eventsCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    `;

    container.innerHTML = carouselHTML;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        loadEvents(eventsData);
    } catch (error) {
        console.error('Error loading events:', error);
        document.getElementById('carouselContainer').innerHTML = 
            '<div class="error">Error loading events: ' + error.message + '</div>';
    }
});