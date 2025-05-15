let StartFunc = () => {
    const calendarEl = document.getElementById('calendar');

    // Initialize the calendar
    const calendar = new FullCalendar.Calendar(calendarEl, {
        height: 450,
        width: 450,
        events: {
            url: '/V1/Tasks/ReadData', // Your server endpoint
            method: 'GET'
        },
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }
    });

    calendar.render();
};

export { StartFunc };