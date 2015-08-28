<html>
<head>
	<title>100 Doors Problem</title>
</head>
<body>
	<div id="doorPlace">
	</div>
	<div>
		<button id="algBtn" onClick="process()">Process</button> 
	</div>
	<div id="logZone"></div>
	<script>

		var array = [];
		var doorSpace = document.getElementById("doorPlace");
		var logZone = document.getElementById("logZone");

		function initialize(){
			for(var times = 0; times < 100; times++)
			{
				array[times] = 0;
				doorSpace.innerHTML = doorSpace.innerHTML +  "<img id='" + times + "' src='closed.jpg'></img>";

			}
		};

		initialize();
		function process(){
			
			
			for(var iteration = 1; iteration <= 100; iteration++)
			{
				if(iteration == 1)
				{
					for(var index = 0; index < 100; index++)
					{
						array[index] = 1;
					}
				}

				else if(iteration == 2)
				{
					for(var index = 1; index < 100; index = index + 2)
					{
						array[index] = 0;
					}
				}

				else
				{
					
					for(var index = iteration - 1; index < 100; index = index + iteration)
					{
						array[index] = changeValue(array[index]);
					}

				}

				logIterations(iteration);
				updateImages();
			}
		};

		function changeValue(element){
			if(element == 1)
				element = 0;
			else
				element = 1;
			return element;
		};


		function updateImages()
		{
			for(var i = 0; i < array.length; i++)
			{
				var image = document.getElementById("" + i);
				if(array[i] == 1)
				{
					image.src = "opened.jpg";
				}
				else{
					image.src = "closed.jpg";
				}
			}
		}

		function logIterations(number){
			logZone.innerHTML = "Iteration Number : " + number;
		};

	</script>
</body>
</html>
