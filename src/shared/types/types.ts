type Inputs = {
	[index: string]: string;
};

type pr = {
	firstName: string | undefined;
	lastName: string | undefined;
	country: string | undefined;
	dateOfBirth: Date | undefined;
	age: number | undefined;
};

interface ProfileUserDataProps {
	userName: string | undefined;
	email: string | undefined;
	extendData: pr | undefined;
}

export type { Inputs, ProfileUserDataProps };
