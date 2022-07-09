
				TimeMe.initialize({
					currentPageName: "VKSebastian",
				});
				const element = document.getElementById("timeInSeconds");
				const greeting = document.getElementById("greeting");
				setInterval(function() {
					element.innerHTML = TimeMe.getTimeOnCurrentPageInSeconds().toFixed(0);
				}, 1000);
				
				TimeMe.callAfterTimeElapsedInSeconds(10, function(){
					greeting.innerHTML = "Hire me!";
				});