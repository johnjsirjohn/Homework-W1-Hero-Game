// Write your JS here
//Declaring a variable 'hero' and assign an object to it
const hero = {
	name: 'John',
	heroic: true,
	inventory: [],
	health: 10,
	weapon: {
		type: 'gun',
		damage: 2
	}
};

//Declaring the functions rest
//rest function can be called with object as an argument
function rest(heroObject) {
	if (heroObject.health === 10) {
		alert('Your have the highest level of health!');
	} else {
		heroObject.health = 10;
	}
	return heroObject;
}

//Creating the weapon-like object which I nammed it daggerT
const daggerT = {
	type: 'dagger',
	damage: 2
};

//Declaring the functions pickUpItem
function pickUpItem(heroObject, weaponObject) {
	heroObject.inventory.push(weaponObject);
}

//Declaring the functions equipWeapon
function equipWeapon(heroObject) {
	//if the inventory of the hero-like object is empty
	if (!heroObject.inventory || !heroObject.inventory.length) {
		return;
	} else {
		heroObject.weapon = heroObject.inventory[0];
	}
}
