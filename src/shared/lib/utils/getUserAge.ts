const getUserAge = (date: string) => {
	const ageDifMs = Date.now() - new Date(date).getTime();
	const ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default getUserAge;

