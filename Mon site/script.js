let pseudo = prompt("Quel est ton pseudo ?");
console.log("après question pesudo");

alert("Bonjour " + pseudo + " ,comment ça va ?");
console.log("après salut avec pseudo");

let salutationTitle = document.getElementById("salutationTitle")

salutationTitle.innerText = "Coucou " + pseudo + " !"

let isOk = prompt("est-tu une blink ? répondre par oui ou non");

if ((isOk == "oui") || (isOk == "OUI") || (isOk == "Oui"))
{
	alert("Ce site est fait pour toi ;)")
}

else if ((isOk == "non") || (isOk =="Non") || (isOk == "NON"))
{
	 alert("Dit-moi si tu aimerais que je crée un site sur ton groupe préféré ;)")
}

else 
{
	window.location.replace('https://youtu.be/sukfYLbMbaU?si=LTL0gdCsu6MSAUeL');
}