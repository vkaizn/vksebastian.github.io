
				TimeMe.initialize({
					currentPageName: "VKSebastian",
				});
				const element = document.getElementById("timeInSeconds");
				const greeting = document.getElementById("greeting");
				setInterval(function() {
					element.innerHTML = toRomanNumeral(TimeMe.getTimeOnCurrentPageInSeconds().toFixed(0));
				}, 1000);
				
				TimeMe.callAfterTimeElapsedInSeconds(10, function(){
					greeting.innerHTML = "Hire me!";
					greeting.setAttribute('href', 'https://www.linkedin.com/in/vksebastian/')
				});

				function toRomanNumeral(num) {
					const romanNumerals = {
						M: 1000,
						CM: 900,
						D: 500,
						CD: 400,
						C: 100,
						XC: 90,
						L: 50,
						XL: 40,
						X: 10,
						IX: 9,
						V: 5,
						IV: 4,
						I: 1
					};

					let result = '';
					for (let key in romanNumerals) {
						while (num >= romanNumerals[key]) {
							result += key;
							num -= romanNumerals[key];
						}
					}
				
					return result;
				}