export type TUser = {
	id: number | null;
	nik: string | null;
	email: string | null;
	firstName: string | null;
	secondName: string | null;
	isAdmin: boolean;
	createdAt: Date | null;
	updatedAt: Date | null;
};
