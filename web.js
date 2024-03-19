document.addEventListener('DOMContentLoaded', function() {
  var calendar = new EvoCalendar(document.getElementById('calendar'), {
    format: '2024-03-20', 
    language: 'en', 
    titleFormat: 'Literary Club meet', 
    eventHeaderFormat: 'All team, Meet', 
    sidebarDisplayDefault: false, 
    sidebarToggler: true, 
    todayHighlight: true, 
    sidebarDisplayDefault: true, 
    sidebarDisplayDateFormat: '', 
    allowChangeDate: true, 
    disableYearView: false, 
    disableTimeView: false, 
    disableDateView: false, 
    disableMonthView: false, 
    disableWeekView: false, 
   
    onSelectDate: function() {
      console.log('...');
    },
    onOpenCalendar: function() {
      console.log('..');
    },
    onCloseCalendar: function() {
      console.log('*');
    },
    onMonthChange: function() {
      console.log('&');
    },
    onLoadEvents: function() {
      console.log('!');
    },
    onEventClick: function() {
      console.log('#');
    }
  });

  
  var events = [
    {
      id: 'event1',
      name: 'Literary Club meet',
      date: '2024-03-20'
    },
    {
      id: 'event2',
      name: 'Gdsc Club',
      date: '2024-03-23'
    }
  ];

  calendar.addCalendarEvent(events);
});

