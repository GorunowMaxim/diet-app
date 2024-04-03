type Inputs = {
	[index: string]: string;
};

type ExtendData = {
	firstName: string | undefined;
	lastName: string | undefined;
	country: string | undefined;
	dateOfBirth: Date | undefined;
	age: number | undefined;
	about: string | undefined;
};

interface ProfileUserDataProps {
	userName: string | undefined;
	email: string | undefined;
	extendData: ExtendData | undefined;
}

export type { Inputs, ProfileUserDataProps };
