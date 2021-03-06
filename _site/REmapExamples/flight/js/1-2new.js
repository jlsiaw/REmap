var myChart = echarts.init(document.getElementById("main"));

var options = {
  	timeline:{
			data:[
				'6:45-7:00','7:00-7:15','7:15-7:30','7:30-7:45',
        '7:45-8:00','8:00-8:15','8:15-8:30','8:30-8:45',
        '8:45-9:00','9:00-9:15','9:15-9:30','9:30-9:45',
        '9:45-10:00','10:00-10:15','10:15-10:30',
        '10:30-10:45','10:45-11:00','11:00-11:15',
        '11:15-11:30','11:30-11:45','11:45-12:00',
        '12:00-12:15','12:15-12:30','12:30-12:45',
        '12:45-13:00','13:00-13:15','13:15-13:30',
        '13:30-13:45','13:45-14:00','14:00-14:15',
        '14:15-14:30','14:30-14:45','14:45-15:00',
        '15:00-15:15','15:15-15:30','15:30-15:45',
        '15:45-16:00','16:00-16:15','16:15-16:30',
        '16:30-16:45','16:45-17:00','17:00-17:15',
        '17:15-17:30','17:30-17:45','17:45-18:00',
        '18:00-18:15','18:15-18:30','18:30-18:45',
        '18:45-19:00','19:00-19:15','19:15-19:30',
        '19:30-19:45','19:45-20:00','20:00-20:15',
        '20:15-20:30','20:30-20:45','20:45-21:00',
        '21:00-21:15','21:15-21:30','21:30-21:45',
        '21:45-22:00','22:00-22:15','22:15-22:30',
        '22:30-22:45','22:45-23:00','23:00-23:15','23:15-23:30'
			],
			autoPlay : true,
			playInterval : 1000
		},
    
		options:[